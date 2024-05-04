"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("0ec3e527-4087-4c31-b344-f6ea078dbce5");
  }, []);

  return null;
};