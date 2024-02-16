"use client";

import { useRouter } from "next/navigation";
import { MouseEventHandler, ReactNode } from "react";
import styles from "@/app/page.module.css";

interface ModalProps {
  id: string;
}

export default function Modal({ id }: ModalProps) {
  const router = useRouter();
  const onHandleClose: MouseEventHandler<HTMLButtonElement> = () => {
    router.back();
  };
  console.log(id);
  return (
    <div className={styles.cardSection}>
      <button className={styles.test} onClick={onHandleClose}>
        X
      </button>
      <p> {id}</p>
    </div>
  );
}
