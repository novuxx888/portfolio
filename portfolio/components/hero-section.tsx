"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { HERO_HEADLINE, HERO_SUBTITLE, EXTERNAL_LINKS } from "@/lib/constants";
import { ArrowRight, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <motion.section
      className="col-span-1 md:col-span-2 row-span-2 bg-card rounded-xl p-8 md:p-12 flex flex-col justify-center border border-border relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Subtle gradient accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 leading-tight">
          {HERO_HEADLINE}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl">
          {HERO_SUBTITLE}
        </p>
        <div className="flex flex-wrap gap-4">
          <Button size="lg" asChild>
            <a
              href={EXTERNAL_LINKS.knyte}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View Knyte company website"
            >
              View Knyte
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a
              href={EXTERNAL_LINKS.engineeringLogs}
              aria-label="View Andrew's Engineering Logs"
            >
              <FileText className="mr-2 h-4 w-4" />
              Engineering Logs
            </a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}

