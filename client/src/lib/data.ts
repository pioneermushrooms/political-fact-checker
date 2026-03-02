// Political Fact-Checker Dashboard Data
// Sourced from Notion: Politics Fact-Checker Topic Tracker
// Design: Civic Transparency Portal — warm white bg, deep navy brand, verdict color spectrum

export type Verdict = "True" | "Mostly True" | "Mixed" | "Mostly False" | "False";
export type Category = "Economy" | "Immigration/Border" | "Domestic Policy" | "Criminal Justice" | "Foreign Policy" | "Healthcare" | "Other";
export type Status = "Initial Coverage" | "Follow-Up Pending" | "Follow-Up Complete" | "Archived";

export interface Report {
  id: string;
  title: string;
  url: string;
  verdict: Verdict;
  category: Category;
  keyFigures: string[];
  reportDate: string;
  dateCovered: string;
  status: Status;
  followUpRequired: boolean;
  followUpReason: string;
  fullDetails: string;
  content: string;
}

export const reports: Report[] = [
  {
    id: "31005c7c-d6a6-814d-ab73-f532379d8eec",
    title: "Trump Claims Economic Growth Is Exploding to Numbers Unheard Of",
    url: "https://www.notion.so/31005c7cd6a6814dab73f532379d8eec",
    verdict: "Mostly False",
    category: "Economy",
    keyFigures: ["Trump"],
    reportDate: "2026-02-23",
    dateCovered: "2026-01-27",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "Trump claimed economic growth is exploding to numbers unheard of. BEA data shows Q4 2025 GDP grew only 1.4% (annualized), down from 4.4% in Q3. Full-year 2025 growth was 2.2%, below 2024's 2.8%. Q3 2025 growth of 4.4% was actually lower than Biden's Q3 2023 (4.7%). Job growth under Trump year 1 (359k, 0.2%) was slower than Biden's final year (1.2M, 0.8%). Sources: FactCheck.org, BEA, NYT.",
    content: `## Claim\n"Under my leadership, economic growth is exploding to numbers unheard of. They've never had them before." — President Donald Trump, Iowa, January 27, 2026.\n\n## Verdict: Mostly False\nBEA advance estimate (Feb 20, 2026) shows Q4 2025 GDP grew at just 1.4% annualized, down sharply from 4.4% in Q3 2025. Full-year 2025 growth was 2.2%, below 2024's 2.8%. The economy actually contracted in Q1 2025 (-0.6%). The Q3 2025 growth of 4.4% was below Biden's Q3 2023 figure of 4.7%.\n\n## Key Data\n- Q1 2025: -0.6%\n- Q2 2025: +3.8%\n- Q3 2025: +4.4%\n- Q4 2025: +1.4%\n- Full Year 2025: +2.2% (vs 2.8% in 2024)\n\n## Sources\n- FactCheck.org (Feb 19, 2026)\n- BEA (Feb 20, 2026)\n- NYT (Feb 23, 2026)`,
  },
  {
    id: "31005c7c-d6a6-81d2-b915-cea586cb5716",
    title: "Trump Says Supreme Court Tariff Ruling Made His Tariff Power More Powerful",
    url: "https://www.notion.so/31005c7cd6a681d2b915cea586cb5716",
    verdict: "False",
    category: "Economy",
    keyFigures: ["Trump"],
    reportDate: "2026-02-23",
    dateCovered: "2026-02-23",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "Trump claimed a Supreme Court ruling expanded his tariff powers. No such ruling exists as of Feb 2026. The Supreme Court has not issued any ruling on tariff authority in 2026. Legal experts confirm existing tariff authority comes from IEEPA and Section 232, unchanged by any recent court decision.",
    content: `## Claim\nTrump stated that a Supreme Court ruling had made his tariff powers "more powerful than ever."\n\n## Verdict: False\nNo Supreme Court ruling on tariff authority was issued in 2026. Legal experts confirm that existing tariff authority derives from IEEPA and Section 232, and no court decision has expanded these powers.\n\n## Sources\n- Legal analysis from constitutional law experts\n- Supreme Court docket review (Feb 2026)`,
  },
  {
    id: "31005c7c-d6a6-810d-be22-d722a1f9698c",
    title: "DOGE Will Send $5,000 Dividend Checks to American Taxpayers",
    url: "https://www.notion.so/31005c7cd6a6810dbe22d722a1f9698c",
    verdict: "False",
    category: "Economy",
    keyFigures: ["Trump", "Cabinet Officials"],
    reportDate: "2026-02-23",
    dateCovered: "2026-02-23",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "Claims that DOGE savings would fund $5,000 checks to taxpayers are false. DOGE's claimed $55B in savings (as of Feb 2026) falls far short of the ~$1.5T needed to send $5,000 to all 300M Americans. Many claimed savings are disputed or unverified. No legislation authorizing such payments exists.",
    content: `## Claim\nDOGE will send $5,000 dividend checks to American taxpayers from government savings.\n\n## Verdict: False\nDOGE's claimed savings of ~$55B as of February 2026 are far below the ~$1.5 trillion needed to fund $5,000 payments to all Americans. Many claimed savings are disputed. No legislation authorizing such payments has been introduced.\n\n## Sources\n- DOGE public reporting\n- Congressional Budget Office analysis\n- FactCheck.org`,
  },
  {
    id: "30905c7c-d6a6-813e-a8d1-c186b6fe69e5",
    title: "New Stimulus Checks and $2,000 Tariff Dividend",
    url: "https://www.notion.so/30905c7cd6a6813ea8d1c186b6fe69e5",
    verdict: "Mostly False",
    category: "Economy",
    keyFigures: ["Trump"],
    reportDate: "2026-02-16",
    dateCovered: "2026-02-16",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "Claims about new stimulus checks funded by tariff revenue are misleading. Tariff revenue projections are highly uncertain and contested by economists. No legislation for stimulus checks has passed. The claim conflates proposed policy with enacted law.",
    content: `## Claim\nNew $2,000 stimulus checks will be funded by tariff dividend revenue.\n\n## Verdict: Mostly False\nNo legislation for such payments has passed. Tariff revenue projections are highly uncertain. Economists note tariff costs are largely passed to consumers, not government revenue.\n\n## Sources\n- Congressional record review\n- Economic Policy Institute analysis`,
  },
  {
    id: "2fb05c7c-d6a6-8182-beb3-e0438e056d7a",
    title: 'ICE Targeting "Worst of the Worst" Criminals',
    url: "https://www.notion.so/2fb05c7cd6a68182beb3e0438e056d7a",
    verdict: "Mostly False",
    category: "Immigration/Border",
    keyFigures: ["Trump", "Cabinet Officials"],
    reportDate: "2026-02-02",
    dateCovered: "2026-02-02",
    status: "Initial Coverage",
    followUpRequired: true,
    followUpReason: "Ongoing/Developing Story",
    fullDetails: "Administration claims ICE is exclusively targeting violent criminals are contradicted by arrest data. ICE data shows a significant portion of recent arrests involve individuals with no criminal record or only minor infractions. The 'worst of the worst' framing does not match documented arrest patterns.",
    content: `## Claim\nICE is exclusively targeting the "worst of the worst" violent criminals in its enforcement operations.\n\n## Verdict: Mostly False\nICE arrest data shows a significant portion of recent detainees have no prior criminal record or only minor infractions. The administration's framing does not align with documented enforcement patterns.\n\n## Sources\n- ICE arrest data (FOIA releases)\n- ACLU analysis\n- Reuters investigative report`,
  },
  {
    id: "30905c7c-d6a6-81b5-a920-f68f7ae851cb",
    title: "Trump Can Impose Voter ID by Executive Order",
    url: "https://www.notion.so/30905c7cd6a681b5a920f68f7ae851cb",
    verdict: "Mostly False",
    category: "Domestic Policy",
    keyFigures: ["Trump"],
    reportDate: "2026-02-16",
    dateCovered: "2026-02-16",
    status: "Initial Coverage",
    followUpRequired: true,
    followUpReason: "Extremely Controversial",
    fullDetails: "The claim that the President can impose federal voter ID requirements by executive order is mostly false. Voting requirements are primarily set by states under the Constitution. Federal legislation (not executive orders) can set some federal election standards, but broad voter ID mandates would require Congressional action and face significant constitutional challenges.",
    content: `## Claim\nTrump can impose a national voter ID requirement through executive order alone.\n\n## Verdict: Mostly False\nVoting requirements are primarily a state prerogative under the Constitution. A sweeping federal voter ID mandate via executive order would face immediate constitutional challenges. Congressional legislation would be required for any broad federal standard.\n\n## Sources\n- Constitutional law analysis\n- Brennan Center for Justice\n- Heritage Foundation review`,
  },
  {
    id: "30205c7c-d6a6-81ae-a323-cdb3b556d36f",
    title: "Factory Construction Is Up by 41%",
    url: "https://www.notion.so/30205c7cd6a681aea323cdb3b556d36f",
    verdict: "False",
    category: "Economy",
    keyFigures: ["Trump"],
    reportDate: "2026-02-09",
    dateCovered: "2026-02-09",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "The claim that factory construction is up 41% under Trump's current term is false. The 41% figure refers to growth during Biden's term (2021-2024), largely driven by the CHIPS Act and IRA. Under Trump's current term, factory construction spending has actually declined from its 2024 peak.",
    content: `## Claim\nFactory construction is up by 41% under Trump's leadership.\n\n## Verdict: False\nThe 41% growth figure refers to construction during Biden's term (2021–2024), driven by the CHIPS Act and Inflation Reduction Act. Under Trump's current term, factory construction spending has declined from its 2024 peak.\n\n## Sources\n- Census Bureau construction spending data\n- FactCheck.org\n- Brookings Institution analysis`,
  },
  {
    id: "2f405c7c-d6a6-814e-b319-d535dbe95faa",
    title: "$2,000 Tariff Rebate Checks Do Not Need Congressional Approval",
    url: "https://www.notion.so/2f405c7cd6a6814eb319d535dbe95faa",
    verdict: "Mostly False",
    category: "Economy",
    keyFigures: ["Trump"],
    reportDate: "2026-01-26",
    dateCovered: "2026-01-26",
    status: "Initial Coverage",
    followUpRequired: true,
    followUpReason: "Unverified/Needs More Info",
    fullDetails: "The claim that tariff rebate checks can be issued without Congressional approval is mostly false. Appropriations for direct payments to citizens require Congressional authorization under the Appropriations Clause. While some emergency powers exist, direct cash payments of this scale would require legislation.",
    content: `## Claim\n$2,000 tariff rebate checks can be issued to Americans without Congressional approval.\n\n## Verdict: Mostly False\nDirect cash payments to citizens require Congressional appropriation under the Constitution's Appropriations Clause. Emergency powers do not extend to large-scale direct payment programs without legislative authorization.\n\n## Sources\n- Congressional Research Service\n- Constitutional law experts\n- GAO guidance on appropriations`,
  },
  {
    id: "2ed05c7c-d6a6-8110-88e6-c4bfcff9bbe5",
    title: "Trump Fired Fed Governor Lisa Cook Over Mortgage Fraud",
    url: "https://www.notion.so/2ed05c7cd6a6811088e6c4bfcff9bbe5",
    verdict: "Mostly False",
    category: "Economy",
    keyFigures: ["Trump"],
    reportDate: "2026-01-19",
    dateCovered: "2026-01-19",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "The claim that Trump fired Fed Governor Lisa Cook over mortgage fraud is mostly false. Cook was removed from the Federal Reserve Board, but there is no credible evidence of mortgage fraud allegations. The removal itself is legally contested — Fed governors are protected by statute from removal except 'for cause,' and the administration has not cited fraud as justification.",
    content: `## Claim\nTrump fired Federal Reserve Governor Lisa Cook because of mortgage fraud.\n\n## Verdict: Mostly False\nWhile Cook was removed from the Fed Board, there is no credible evidence of mortgage fraud allegations. The removal is legally contested under the Federal Reserve Act, which protects governors from removal except "for cause." No fraud charges have been filed.\n\n## Sources\n- Federal Reserve Act legal analysis\n- Reuters reporting\n- Washington Post investigation`,
  },
  {
    id: "30905c7c-d6a6-818a-bf9d-feb78b24b601",
    title: "Trump: U.S. Crime Rate at 125-Year Low",
    url: "https://www.notion.so/30905c7cd6a6818abf9dfeb78b24b601",
    verdict: "Mixed",
    category: "Criminal Justice",
    keyFigures: ["Trump"],
    reportDate: "2026-02-16",
    dateCovered: "2026-02-16",
    status: "Initial Coverage",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "The claim about a 125-year low crime rate is mixed. Violent crime did decline significantly in 2023-2024 per FBI data, continuing a long-term trend. However, the '125-year low' framing is not supported by consistent historical data — crime statistics methodology has changed dramatically over 125 years, making direct comparisons unreliable.",
    content: `## Claim\nThe U.S. crime rate is at a 125-year low.\n\n## Verdict: Mixed\nViolent crime did decline significantly in 2023–2024 per FBI data, continuing a long-term downward trend. However, the "125-year low" framing is unsupported — crime statistics methodology has changed dramatically over 125 years, making direct historical comparisons unreliable.\n\n## Sources\n- FBI Uniform Crime Report 2024\n- Bureau of Justice Statistics\n- Brennan Center for Justice`,
  },
  {
    id: "30905c7c-d6a6-8146-aabd-d7cd77ad4ea2",
    title: "Pennsylvania Mail-In Ballot Fraud (2020)",
    url: "https://www.notion.so/30905c7cd6a68146aabdd7cd77ad4ea2",
    verdict: "False",
    category: "Domestic Policy",
    keyFigures: ["Trump"],
    reportDate: "2026-02-16",
    dateCovered: "2026-02-16",
    status: "Archived",
    followUpRequired: false,
    followUpReason: "None",
    fullDetails: "Claims of widespread mail-in ballot fraud in Pennsylvania in the 2020 election are false. Over 60 court cases, multiple audits, and investigations by Republican-led state legislatures found no evidence of widespread fraud. Pennsylvania's own Republican-appointed election officials certified the results.",
    content: `## Claim\nWidespread mail-in ballot fraud occurred in Pennsylvania during the 2020 election.\n\n## Verdict: False\nOver 60 court cases, multiple audits, and investigations by Republican-led state legislatures found no evidence of widespread fraud. Pennsylvania's Republican-appointed election officials certified the results. Federal and state courts uniformly rejected fraud claims.\n\n## Sources\n- Pennsylvania Supreme Court rulings\n- U.S. Department of Justice findings\n- Pennsylvania Department of State audit reports`,
  },
];

// Computed metrics
export const metrics = {
  totalReports: reports.length,
  verdictDistribution: {
    "True": reports.filter(r => r.verdict === "True").length,
    "Mostly True": reports.filter(r => r.verdict === "Mostly True").length,
    "Mixed": reports.filter(r => r.verdict === "Mixed").length,
    "Mostly False": reports.filter(r => r.verdict === "Mostly False").length,
    "False": reports.filter(r => r.verdict === "False").length,
  },
  categoryDistribution: reports.reduce((acc, r) => {
    acc[r.category] = (acc[r.category] || 0) + 1;
    return acc;
  }, {} as Record<string, number>),
  truthRate: Math.round(
    (reports.filter(r => r.verdict === "True" || r.verdict === "Mostly True").length / reports.length) * 100
  ),
  falseRate: Math.round(
    (reports.filter(r => r.verdict === "False" || r.verdict === "Mostly False").length / reports.length) * 100
  ),
  followUpRequired: reports.filter(r => r.followUpRequired).length,
  figureStats: (() => {
    const stats: Record<string, { total: number; falseCount: number; truthCount: number }> = {};
    reports.forEach(r => {
      r.keyFigures.forEach(fig => {
        if (!stats[fig]) stats[fig] = { total: 0, falseCount: 0, truthCount: 0 };
        stats[fig].total++;
        if (r.verdict === "False" || r.verdict === "Mostly False") stats[fig].falseCount++;
        if (r.verdict === "True" || r.verdict === "Mostly True") stats[fig].truthCount++;
      });
    });
    return stats;
  })(),
  lastUpdated: "March 2, 2026",
};

export const VERDICT_COLORS: Record<Verdict, { bg: string; text: string; border: string; hex: string }> = {
  "True": { bg: "bg-emerald-100", text: "text-emerald-800", border: "border-emerald-400", hex: "#16A34A" },
  "Mostly True": { bg: "bg-lime-100", text: "text-lime-800", border: "border-lime-400", hex: "#65A30D" },
  "Mixed": { bg: "bg-amber-100", text: "text-amber-800", border: "border-amber-400", hex: "#CA8A04" },
  "Mostly False": { bg: "bg-orange-100", text: "text-orange-800", border: "border-orange-400", hex: "#EA580C" },
  "False": { bg: "bg-red-100", text: "text-red-800", border: "border-red-400", hex: "#DC2626" },
};

export const CATEGORY_COLORS: Record<string, string> = {
  "Economy": "#1E3A5F",
  "Immigration/Border": "#7C3AED",
  "Domestic Policy": "#0369A1",
  "Criminal Justice": "#B45309",
  "Foreign Policy": "#065F46",
  "Healthcare": "#BE185D",
  "Other": "#6B7280",
};
