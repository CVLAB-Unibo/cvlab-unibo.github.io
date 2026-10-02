/* ===========================================================================
   Venue tiers, used by the summary at the top of the Publications page.

   A paper's tier comes from, in this order:
     1) its own `rank` field if present, e.g. "GGS A++", "GGS A", "GGS A-", "Q1 · IF 10.8"
     2) the lists below, matched on the venue's short name ("CVPR", "TPAMI", ...)

   Workshops, arXiv preprints and theses are never counted as top-tier.
   PLEASE REVIEW these lists – edit freely (short names as shown in the venue badge).
   =========================================================================== */
window.VENUES = {
  // conferences rated A* / A++ (GGS A++ ~ CORE A*)
  top: ["CVPR", "ICCV", "ECCV", "NeurIPS", "ICLR", "ICML", "AAAI"],
  // other strong conferences (GGS A / A-)
  a:   ["WACV", "BMVC", "ICRA", "IROS", "3DV", "SIGGRAPH Asia", "SIGGRAPH"],
  // journals in the first quartile (Q1) of their Scimago / JCR category
  q1:  ["TPAMI", "IJCV", "T-RO", "TIP", "TCSVT", "CVIU", "Pattern Recognit.", "T-ITS", "Neural Networks", "IVC", "TMM",
         "RA-L", "T-ASE", "IoT-J"]
};
