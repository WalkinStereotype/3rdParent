import "./ResourceList.css";

import { Resource } from "@/utils/schema";

interface ResourceListProps {
  resources: Resource[];
}

export default function ResourceList({resources}: ResourceListProps) {
  if (resources.length === 0) return null;

  return (
    resources.map((r) => (<a href={r.url}>{r.name}</a>))
  );
}