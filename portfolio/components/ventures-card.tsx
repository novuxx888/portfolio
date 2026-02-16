"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { knyteProject } from "@/lib/content";
import { ArrowUpRight, Zap } from "lucide-react";

export function VenturesCard() {
  const project = knyteProject;

  return (
    <motion.div
      className="col-span-1 md:col-span-2 row-span-2 bg-card rounded-xl border border-border overflow-hidden relative group"
      whileHover={{ scale: 1.01, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Zap className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Ventures
            </span>
          </div>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-accent/10 text-accent border border-accent/20">
            Current (Founder/CEO)
          </span>
        </div>

        {/* Title & Description */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3">{project.name}</h2>
        <p className="text-muted-foreground mb-4 max-w-md">
          {project.description}
        </p>

        {/* Metadata Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.metadata?.funding && (
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border">
              {project.metadata.funding}
            </span>
          )}
          {project.metadata?.pivotFrom && (
            <span className="inline-flex items-center px-3 py-1 rounded-md text-xs font-mono bg-secondary text-secondary-foreground border border-border">
              Pivot from {project.metadata.pivotFrom}
            </span>
          )}
        </div>

        {/* Visual + CTA */}
        <div className="flex-1 flex flex-col md:flex-row gap-6 items-end">
          {/* Topology diagram */}
          <div className="flex-1 relative min-h-[120px] w-full opacity-60 group-hover:opacity-80 transition-opacity duration-300">
            <Image
              src="/images/knyte-topology.svg"
              alt={project.visual?.altText || "Knyte topology diagram"}
              fill
              className="object-contain"
            />
          </div>

          {/* CTA Button */}
          {project.links?.[0] && (
            <Button variant="outline" size="sm" asChild className="shrink-0">
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.links[0].ariaLabel}
              >
                {project.links[0].label}
                <ArrowUpRight className="ml-1 h-3 w-3" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

