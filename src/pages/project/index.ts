import { lazy } from "react";

const ProjectLayout = lazy(() => import("./Project.layout"));
const ChatPage = lazy(() => import("./pages/chat/Chat.page"));
const ChatViewPage = lazy(() => import("./pages/chat/view/View.page"));
const DialogFlowPage = lazy(() => import("./pages/dialogFlow/DialogFlow.page"));
const Extensions = lazy(() => import("./pages/extensions/Extensions.page"));
const Integrations = lazy(() => import("./pages/integrations/Integrations.page"));
const KnowledgeBase = lazy(() => import("./pages/knowledgeBase/KnowledgeBase.page"));
const ProjectOverviewPage = lazy(() => import("./pages/overview/Overview.page"));

export {
  ProjectLayout,
  ChatPage,
  ChatViewPage,
  DialogFlowPage,
  Extensions,
  Integrations,
  KnowledgeBase,
  ProjectOverviewPage,
};
