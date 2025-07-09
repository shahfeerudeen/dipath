// src/Utils/tabVisibilityConfig.js

export const tabVisibilityMap = {
    overview: ["overview", "general", "invoice", "product", "exchange"],
    general: ["general", "entity", "sez", "shipment","overview"],
    entity: ["invoice", "charges", "payments", "exchange", "tracking","overview"],
    sez: ["invoice", "charges", "payments", "exchange", "tracking","overview"],
    shipment: ["invoice", "charges", "payments", "exchange", "tracking","overview"],
    invoice: ["invoice", "charges", "payments", "exchange", "tracking","overview"],
    product: ["product", "esanchit", "edocket", "requirement","overview"],
    exchange: ["product", "esanchit", "edocket", "requirement","overview"],
    esanchit: ["product", "esanchit", "edocket", "requirement","overview"],
    edocket: ["product", "esanchit", "edocket", "requirement","overview"],
    product: ["product", "esanchit", "edocket", "requirement","overview"],
    icegate: ["icegate", "customs", "documents","overview"],
    tracking: ["tracking", "history", "notes","overview"],
    settings: ["settings", "notes", "history","overview"]
  };
  