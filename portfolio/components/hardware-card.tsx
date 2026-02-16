"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { piCameraNodeProject } from "@/lib/content";
import { BASE_PATH } from "@/lib/constants";
import { Cpu, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HardwareCard() {
  const project = piCameraNodeProject;

  return (
    <motion.div
      className="col-span-1 row-span-2 bg-card rounded-xl border border-border overflow-hidden relative group"
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="p-6 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <Cpu className="h-4 w-4 text-green-400" />
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Hardware Lab
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-2">{project.name}</h2>
        <p className="text-sm text-muted-foreground mb-4">
          {project.description}
        </p>

        {/* Specifications */}
        <div className="space-y-2 mb-6">
          {project.specifications?.map((spec) => (
            <div
              key={spec}
              className="flex items-center gap-2 text-xs font-mono text-muted-foreground"
            >
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400/60" />
              {spec}
            </div>
          ))}
        </div>

        {/* PCB Visual */}
        <div className="flex-1 relative min-h-[100px] opacity-50 group-hover:opacity-70 transition-opacity duration-300">
          <Image
              src={`${BASE_PATH}/images/pcb-layers.svg`}
            alt={project.visual?.altText || "PCB layers diagram"}
            fill
            className="object-contain"
          />
        </div>

        {/* Schematics Link */}
        {project.links?.[0] && (
          <Button
            variant="ghost"
            size="sm"
            className="mt-4 w-full justify-start font-mono text-xs"
            asChild
          >
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={project.links[0].ariaLabel}
            >
              {project.links[0].label}
              <ArrowUpRight className="ml-auto h-3 w-3" />
            </a>
          </Button>
        )}
      </div>
    </motion.div>
  );
}

