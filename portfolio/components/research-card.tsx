"use client";

import { motion } from "framer-motion";
import { mlResearchProject } from "@/lib/content";
import { BookOpen } from "lucide-react";

export function ResearchCard() {
  const project = mlResearchProject;

  return (
    <motion.div
      className="col-span-1 row-span-2 bg-card rounded-xl border border-border overflow-hidden relative group"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <BookOpen className="h-4 w-4 text-amber-400" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Research
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{project.name}</h2>

        {/* Status */}
        <span className="inline-flex items-center self-start px-2 py-0.5 rounded-full text-xs font-medium bg-amber-400/10 text-amber-400 border border-amber-400/20 mb-4">
          Ongoing
        </span>

        <p className="text-sm text-muted-foreground mb-6">
          {project.description}
        </p>

        {/* Focus Areas */}
        <div className="space-y-3 flex-1">
          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Focus Areas
          </p>
          {project.specifications?.map((area) => (
            <div
              key={area}
              className="flex items-start gap-3 p-3 rounded-lg bg-secondary/50 border border-border/50"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400/60 mt-1.5 shrink-0" />
              <span className="text-sm text-foreground">{area}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

