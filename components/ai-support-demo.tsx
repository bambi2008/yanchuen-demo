"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Clipboard,
  MessageCircle,
  RotateCcw,
  Send,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { Lang } from "@/lib/site";

type Message = {
  id: number;
  role: "assistant" | "user";
  text: string;
  summary?: boolean;
};

const copy = {
  zh: {
    launcher: "AI 客服 Demo",
    online: "本地演示 · 不会发送资料",
    title: "岩泉项目助手",
    subtitle: "先说需求，再由真人确认细节",
    close: "关闭客服演示",
    reset: "清空对话",
    welcome:
      "你好，我是岩泉网站的 AI 客服演示。我可以介绍产品、整理项目信息，并判断什么时候需要转由销售或工程人员确认。",
    boundary:
      "演示说明：回复来自站内预设资料，不连接真实 AI、WhatsApp、邮箱或后台，也不会保存或发送你输入的内容。",
    quickTitle: "你可以这样开始",
    quick: ["你们可以定制什么？", "询价要准备哪些资料？", "介绍一下生产工序", "我想联系真人"],
    placeholder: "输入问题或项目需求…",
    send: "发送",
    thinking: "正在查找演示知识库…",
    summaryAction: "生成询盘摘要",
    summaryTitle: "询盘摘要（仅本机生成）",
    copy: "复制摘要",
    copied: "已复制",
    emptySummary: "请先告诉我产品类型、数量、用途或项目阶段，我再帮你整理。",
    summaryIntro: "以下内容根据本次演示对话自动整理：",
    summaryFooter:
      "待真人确认：材料、结构、公差、报价、交期、认证及 WhatsApp 联系方式。此摘要尚未发送。",
    noSave: "不保存 · 不发送 · 可随时清空",
  },
  en: {
    launcher: "AI support demo",
    online: "Local demo · nothing is sent",
    title: "Yan Chuen project assistant",
    subtitle: "Describe the need, then confirm details with a person",
    close: "Close support demo",
    reset: "Clear conversation",
    welcome:
      "Hello, I’m Yan Chuen’s website AI support demo. I can introduce product options, organize project information and identify questions that need sales or engineering review.",
    boundary:
      "Demo note: replies use preset on-site information. No real AI, WhatsApp, email or backend is connected, and nothing you enter is saved or sent.",
    quickTitle: "Try one of these",
    quick: ["What can you customize?", "What is needed for a quote?", "Explain the production process", "I need a person"],
    placeholder: "Ask a question or describe your project…",
    send: "Send",
    thinking: "Checking the demo knowledge base…",
    summaryAction: "Create inquiry summary",
    summaryTitle: "Inquiry summary (generated locally)",
    copy: "Copy summary",
    copied: "Copied",
    emptySummary: "Tell me the product type, quantity, application or project stage first, and I’ll organize it.",
    summaryIntro: "Automatically organized from this demo conversation:",
    summaryFooter:
      "For human confirmation: material, construction, tolerances, price, lead time, compliance and WhatsApp contact. This summary has not been sent.",
    noSave: "Not saved · not sent · clear anytime",
  },
} as const;

function answerFor(input: string, lang: Lang) {
  const value = input.toLowerCase();
  const includes = (...words: string[]) => words.some((word) => value.includes(word));

  if (includes("真人", "人工", "客服", "sales", "person", "human", "contact")) {
    return lang === "zh"
      ? "可以。正式版本会把完整对话整理成询盘摘要，再让客户选择 WhatsApp、邮箱或电话联系真人。本 Demo 不会真的转接；企业 WhatsApp 号码仍需由甲方提供并确认。"
      : "Yes. The production version can turn the conversation into an inquiry summary, then let the visitor continue by WhatsApp, email or phone. This demo does not make a real transfer, and the business WhatsApp number still needs client confirmation.";
  }

  if (includes("报价", "询价", "价格", "多少", "quote", "price", "cost", "moq", "交期", "lead time")) {
    return lang === "zh"
      ? "报价需要真人按项目确认。建议准备：①产品类型与用途；②预计数量；③图纸、样品或尺寸；④材料、颜色、字样与触感要求；⑤期望交期。你可以继续把这些资料告诉我，再生成一份未发送的询盘摘要。"
      : "Pricing needs human project review. Please prepare: 1) product type and application; 2) estimated quantity; 3) drawing, sample or dimensions; 4) material, color, legends and tactile requirements; 5) target timing. Share what you know and I can create an unsent inquiry summary.";
  }

  if (includes("定制", "产品", "按键", "橡胶", "薄膜", "custom", "product", "keypad", "rubber", "membrane")) {
    return lang === "zh"
      ? "公开资料显示，岩泉的主要项目方向包括矽胶按键、薄膜按键及模压橡胶零件。可围绕外形、颜色、字样、导电触点、触感、表面处理和装配结构讨论订制；具体材料、性能与合规要求须由工程人员确认。"
      : "Yan Chuen’s public materials cover silicone rubber keypads, membrane keypads and molded rubber components. Projects can discuss geometry, color, legends, conductive contacts, tactile feel, surface finishes and assembly construction. Materials, performance and compliance require engineering confirmation.";
  }

  if (includes("工序", "工厂", "生产", "制造", "factory", "process", "production", "manufactur")) {
    return lang === "zh"
      ? "网站展示的工序包括材料混炼、压缩或液态矽胶成型、印刷、雷射雕刻、涂层、滴胶，以及薄膜印刷、贴装、模切、贴合和压凸。工厂现况、设备能力与认证适用范围仍须由甲方逐项确认。"
      : "The site shows material mixing, compression or liquid silicone molding, printing, laser etching, coating and epoxy work, plus membrane printing, component placement, die cutting, lamination and embossing. Current equipment and certification scope still require client confirmation.";
  }

  if (includes("图纸", "文件", "上传", "drawing", "file", "upload", "sample", "样品")) {
    return lang === "zh"
      ? "未有完整图纸也可以先从草图、样品、尺寸或应用说明开始。这个演示暂不接收附件，也请不要输入机密资料；正式版本应在隐私与保密规则确认后，才开放安全的文件上传。"
      : "A complete drawing is not required to start—you can begin with a sketch, sample, dimensions or application description. This demo does not accept attachments; do not enter confidential information. Secure upload should only be enabled after privacy and confidentiality rules are approved.";
  }

  if (includes("公司", "岩泉", "about", "company", "yan chuen")) {
    return lang === "zh"
      ? "岩泉有限公司是香港公司，公开供应商资料显示成立于 1992 年，业务聚焦订制按键与橡胶组件。网站上的公司历史、厂房关系、认证与规模信息只采用可追溯资料，并保留甲方确认边界。"
      : "Yan Chuen Co., Ltd. is a Hong Kong company. Public supplier records indicate establishment in 1992, with a focus on custom keypads and rubber components. Company history, facility relationships, certification and scale remain subject to traceable sourcing and client confirmation.";
  }

  return lang === "zh"
    ? "这个演示目前只覆盖产品、订制资料、生产工序、询价准备及转人工。你可以换一种说法，或告诉我：需要什么部件、使用场景、预计数量、是否已有图纸。无法从资料确认的内容，我不会代替销售或工程人员作承诺。"
    : "This demo currently covers products, customization inputs, production processes, quote preparation and human handoff. Try rephrasing, or tell me the required component, application, estimated quantity and whether a drawing exists. I won’t make sales or engineering commitments that the source material cannot support.";
}

export function AiSupportDemo({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const [copied, setCopied] = useState(false);
  const sequence = useRef(2);
  const [messages, setMessages] = useState<Message[]>([
    { id: 0, role: "assistant", text: t.welcome },
    { id: 1, role: "assistant", text: t.boundary },
  ]);

  const userMessages = useMemo(
    () => messages.filter((message) => message.role === "user").map((message) => message.text),
    [messages],
  );

  function sendMessage(raw: string) {
    const value = raw.trim();
    if (!value || thinking) return;
    const userMessage: Message = { id: sequence.current++, role: "user", text: value };
    setMessages((current) => [...current, userMessage]);
    setInput("");
    setThinking(true);
    window.setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: sequence.current++, role: "assistant", text: answerFor(value, lang) },
      ]);
      setThinking(false);
    }, 520);
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  function addSummary() {
    const body = userMessages.length
      ? `${t.summaryIntro}\n${userMessages.map((message, index) => `${index + 1}. ${message}`).join("\n")}\n\n${t.summaryFooter}`
      : t.emptySummary;
    setMessages((current) => [
      ...current,
      { id: sequence.current++, role: "assistant", text: body, summary: true },
    ]);
  }

  function reset() {
    setMessages([
      { id: sequence.current++, role: "assistant", text: t.welcome },
      { id: sequence.current++, role: "assistant", text: t.boundary },
    ]);
    setCopied(false);
  }

  async function copySummary(text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <aside className={`ai-support ${open ? "is-open" : ""}`} aria-label={t.launcher}>
      {open && (
        <section id="ai-support-panel" className="ai-support-panel" role="dialog" aria-modal="false" aria-labelledby="ai-support-title">
          <header className="ai-support-head">
            <div className="ai-support-mark"><Sparkles size={19} aria-hidden="true" /></div>
            <div>
              <span>{t.online}</span>
              <h2 id="ai-support-title">{t.title}</h2>
              <p>{t.subtitle}</p>
            </div>
            <button type="button" className="ai-icon-button" onClick={() => setOpen(false)} aria-label={t.close}>
              <X size={19} />
            </button>
          </header>

          <div className="ai-support-messages" aria-live="polite">
            {messages.map((message) => (
              <div className={`ai-message ai-message-${message.role}${message.summary ? " ai-message-summary" : ""}`} key={message.id}>
                <span className="ai-message-avatar" aria-hidden="true">
                  {message.role === "assistant" ? <Bot size={15} /> : <UserRound size={15} />}
                </span>
                <div>
                  {message.summary && <strong className="ai-summary-title">{t.summaryTitle}</strong>}
                  <p>{message.text}</p>
                  {message.summary && userMessages.length > 0 && (
                    <button type="button" className="ai-copy-button" onClick={() => copySummary(message.text)}>
                      {copied ? <Check size={14} /> : <Clipboard size={14} />}
                      {copied ? t.copied : t.copy}
                    </button>
                  )}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="ai-message ai-message-assistant ai-thinking">
                <span className="ai-message-avatar"><Bot size={15} /></span>
                <p><i /><i /><i /><span>{t.thinking}</span></p>
              </div>
            )}
          </div>

          {userMessages.length === 0 && (
            <div className="ai-support-quick">
              <span>{t.quickTitle}</span>
              <div>{t.quick.map((item) => (
                <button type="button" key={item} onClick={() => sendMessage(item)}>{item}<ArrowRight size={13} /></button>
              ))}</div>
            </div>
          )}

          <div className="ai-support-tools">
            <button type="button" onClick={addSummary}><Clipboard size={14} />{t.summaryAction}</button>
            <button type="button" onClick={reset}><RotateCcw size={14} />{t.reset}</button>
          </div>

          <form className="ai-support-form" onSubmit={onSubmit}>
            <label className="sr-only" htmlFor={`ai-support-input-${lang}`}>{t.placeholder}</label>
            <input
              id={`ai-support-input-${lang}`}
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder={t.placeholder}
              autoComplete="off"
            />
            <button type="submit" disabled={!input.trim() || thinking} aria-label={t.send}><Send size={17} /></button>
          </form>
          <p className="ai-support-footnote">{t.noSave}</p>
        </section>
      )}

      <button
        type="button"
        className="ai-support-launcher"
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls="ai-support-panel"
      >
        <span>{open ? <X size={20} /> : <MessageCircle size={21} />}</span>
        <strong>{t.launcher}</strong>
        {!open && <i aria-hidden="true" />}
      </button>
    </aside>
  );
}
