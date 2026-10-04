/* ===========================================================================
   Venue tiers, used by the summary at the top of the Publications page.

   Conferences follow the ICORE 2026 ranking (https://portal.core.edu.au/conf-ranks/),
   which since 2024 replaces the GII-GRIN-SCIE (GGS) rating. Journals: quartile only
   (Scimago / JCR category).

   A paper's tier comes from, in this order:
     1) its own `rank` field if present, e.g. "CORE A*", "CORE A", "Q1"
     2) the lists below, matched on the venue's short name ("CVPR", "TPAMI", ...)

   Workshops, arXiv preprints and theses are never counted as top-tier.
   3DV is not ranked in ICORE 2026, so it counts under "Other venues".
   PLEASE REVIEW these lists – edit freely (short names as shown in the venue badge).
   =========================================================================== */
window.VENUES = {
  // conferences rated A* in ICORE 2026
  top: ["CVPR", "ICCV", "ECCV", "NeurIPS", "ICLR", "ICML", "AAAI", "ICRA", "SIGGRAPH", "SIGGRAPH Asia"],
  // conferences rated A in ICORE 2026
  a:   ["WACV", "BMVC", "IROS"],
  // journals in the first quartile (Q1) of their Scimago / JCR category
  q1:  ["TPAMI", "IJCV", "T-RO", "TIP", "TCSVT", "CVIU", "Pattern Recognit.", "T-ITS", "Neural Networks", "IVC", "TMM",
         "RA-L", "T-ASE", "IoT-J"]
};
