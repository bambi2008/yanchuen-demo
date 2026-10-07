import { readFile, writeFile, mkdir, stat } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const sourcePath = join(root, "presentation", "yanchuen-redesign-story.source.html");
const outputPath = join(root, "deliverables", "YanChuen_官網重構成果演示_20261007.html");
const meetingOutputPath = join(root, "deliverables", "YanChuen_官網重構成果演示_會議室16比9版_20261007.html");
const emailDownloadPath = join(root, "deliverables", "YanChuen_Website_Redesign_Email.html");
const meetingDownloadPath = join(root, "deliverables", "YanChuen_Website_Redesign_MeetingRoom_16x9.html");
const meetingMusicDownloadPath = join(root, "deliverables", "YanChuen_MeetingRoom_16x9_Music_Embedded_v2.html");
const mime = { ".webp": "image/webp", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".svg": "image/svg+xml", ".mp3": "audio/mpeg" };

const source = await readFile(sourcePath, "utf8");
const assets = [...new Set([...source.matchAll(/\{\{ASSET:([^}]+)\}\}/g)].map((match) => match[1]))];
const assetUris = new Map();

for (const asset of assets) {
  const assetPath = join(root, "public", "assets", asset);
  const ext = asset.slice(asset.lastIndexOf(".")).toLowerCase();
  const data = await readFile(assetPath);
  const uri = `data:${mime[ext] ?? "application/octet-stream"};base64,${data.toString("base64")}`;
  assetUris.set(asset, uri);
}

const inlineAssets = (input) => {
  let output = input;
  for (const [asset, uri] of assetUris) output = output.replaceAll(`{{ASSET:${asset}}}`, uri);
  return output;
};

const html = inlineAssets(source);
const meetingOverrides = `
    /* Meeting-room edition: designed for 16:9 displays at 1280×720 and above. */
    @media(min-width:901px){
      :root{--pad:clamp(58px,5vw,112px)}
      .topbar{height:70px}
      .slide{padding-top:108px;padding-bottom:94px}
      .cover h1{font-size:clamp(66px,6vw,114px);margin-bottom:24px}
      .lead{font-size:clamp(20px,1.55vw,28px)}
      .controls{bottom:25px}
      .control-btn{width:42px;height:42px}
    }
`;
const meetingHtml = inlineAssets(source)
  .replace("<title>岩泉官網重構｜策略與成果互動演示</title>", "<title>岩泉官網重構｜會議室 16:9 演示版</title>")
  .replace("Website redesign story", "Meeting room · 16:9")
  .replace("Private client presentation · 2026", "Meeting room presentation · 16:9 · 2026")
  .replace("const duration=10500", "const duration=15000")
  .replace("  </style>", `${meetingOverrides}\n  </style>`);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, html, "utf8");
await writeFile(meetingOutputPath, meetingHtml, "utf8");
await writeFile(emailDownloadPath, html, "utf8");
await writeFile(meetingDownloadPath, meetingHtml, "utf8");
await writeFile(meetingMusicDownloadPath, meetingHtml, "utf8");
const [size, meetingSize] = await Promise.all([stat(outputPath), stat(meetingOutputPath)]);
console.log(JSON.stringify({
  assets: assets.length,
  outputs: [
    { outputPath, downloadPath: emailDownloadPath, bytes: size.size, format: "responsive-email" },
    { outputPath: meetingOutputPath, downloadPath: meetingDownloadPath, bytes: meetingSize.size, format: "meeting-room-16:9" }
  ]
}, null, 2));
