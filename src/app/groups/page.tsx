import type { Metadata } from "next";
import { GroupsSection } from "./GroupsSection";
import { runningGroups } from "@/lib/data";

export const metadata: Metadata = {
  title: "Беговые группы",
  description:
    "Найдите единомышленников для совместных пробежек по темпу и расписанию.",
};

export default function GroupsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <p className="text-xs uppercase tracking-[0.2em] text-[var(--neon-violet)]">
        // community
      </p>
      <h1 className="mt-2 text-3xl font-bold werun-heading">Беговые группы</h1>
      <p className="mt-3 max-w-2xl werun-muted">
        Бегать в компании проще: общий темп, регулярность и поддержка. Выберите
        группу по городу и скорости или оставьте заявку — тренер поможет
        подобрать вариант.
      </p>
      <GroupsSection groups={runningGroups} />
    </div>
  );
}
