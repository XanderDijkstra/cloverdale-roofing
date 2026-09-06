"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./mobile-assessment.module.css";

export default function MobileAssessment() {
  const pathname = usePathname();
  return <AssessmentAction key={pathname} />;
}

function AssessmentAction() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const form = document.getElementById("assessment-form");
    if (!form) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting && entry.boundingClientRect.bottom < 0));
    observer.observe(form);
    return () => observer.disconnect();
  }, []);
  if (!visible) return null;
  return <Link className={styles.action} href="#assessment-form">Request roof assessment<ArrowRight size={18} aria-hidden="true" /></Link>;
}
