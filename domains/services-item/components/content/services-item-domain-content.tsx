import {
  SingleLayout,
  SingleLayoutContent,
  SingleLayoutAside,
} from "@/layouts/single";

import { clsx } from "clsx";

export type ServicesItemDomainContentProps = {
  className?: string;
};

export const ServicesItemDomainContent: React.FC<
  ServicesItemDomainContentProps
> = (props): React.JSX.Element => {
  return (
    <SingleLayout
      className={clsx(props.className, "")}
      AsideComponent={<SingleLayoutAside />}
      ContentComponent={<SingleLayoutContent content={content} />}
    />
  );
};

const content = `## Applying for Ukrainian citizenship

Ukrainian citizenship is the legal status that confirms a person’s belonging to the national  state, documented by a certificate of citizenship or [Presidential Decree](/). Foreign nationals and stateless persons can applying for Ukrainian citizenship under the Law of Ukraine “On Citizenship of Ukraine” which sets out the legal grounds and procedure for acquisition.

- **Admission / Naturalization (Article 9):** for foreigners who have lived in Ukraine for a required period, speak Ukrainian, and have a legal source of income.
- **Territorial Origin (Article 8):** for persons whose parents, grandparents, or other direct relatives were born or permanently lived on Ukrainian territory before 1991.
- **Ukraine citizenship by Descent:** for individuals who have at least one parent who was a Ukrainian citizen at the time of their birth.
- **Child Born Abroad:** for children automatically entitled to Ukrainian citizenship through their Ukrainian parent(s), registered via consulate or DMS.

Each ground involves its own set of documents, residence criteria, and reviewing authority — usually the State Migration Service (DMS) in Ukraine or a Ukrainian Embassy abroad.

## Naturalization / Admission (Article 9)

A foreign national may getting Ukrainian citizenship by naturalization (admission) if the following conditions are met:

<Alert>From 16 January 2026, the Law of Ukraine on Multiple Citizenship will take effect. Applicants should check updated requirements on the [State Migration Service DMS of Ukraine](https://dmsu.gov.ua/) website before applying.</Alert>

- **Residence:** legal stay in Ukraine for at least 5 years, or 3 years if married to a Ukrainian;
- **Declaration:** written commitment to renounce foreign citizenship, unless exempt by law.
- **Language:** knowledge of the Ukrainian language;

A foreign national may getting Ukrainian citizenship by naturalization (admission) if the following conditions are met:

## Territorial Origin (Article 8)

Ukrainian citizenship by territorial origin is available to persons whose parents, grandparents, or other direct relatives were born or permanently lived on Ukrainian territory before 24 August 1991.

Eligibility must be proven through archival certificates, birth records, or residence documents confirming the ancestral connection. This ground does not require residence in Ukraine; applications can be filed with DMS or Ukrainian consulates abroad.

<Alert>Obtaining citizenship on this basis is simplified and the consideration of documents takes up to 6 months in accordance with the law, and in practice up to 4 months.</Alert>

## By Descent / Birth Registration (Child Born Abroad)

Ukraine citizenship by descent applies when at least one parent was a Ukrainian citizen at the time of the child’s birth. Parents must register the child’s citizenship either at a Ukrainian Embassy abroad or through a DMS Ukraine citizenship application upon returning to Ukraine.

Key documents include the child’s birth certificate, Ukrainian parent’s passport, and notarized translation of foreign documents.

<Alert>If the child is already 18 years old, he or she is obliged to establish Ukrainian citizenship and submit documents independently.</Alert>

Below we suggest you familiarize yourself with the table that displays the key documents for each reason, who to contact and what are the terms of consideration:

| Basis                 | Key Documents                                                       | Authority     |
|-----------------------|--------------------------------------------------------------------|--------------|
| Naturalization        | Passport, residence permit, certificate of knowledge of...         | DMS Ukraine  |
| Territorial origin    | Archival ancestry docs or direct documents confirming...           | DMS Ukraine  |
| Descent / Child abroad| Archival ancestry docs or direct documents confirmi...             | DMS Ukraine  |
| Exceptional service   | Official recommendation                                            | DMS Ukraine  |

Ukraine citizenship by descent applies when at least one parent was a Ukrainian citizen at the time of the child’s birth. Parents must register the child’s citizenship either at a Ukrainian Embassy abroad or through a DMS Ukraine citizenship application upon returning to Ukraine.

Key documents include the child’s birth certificate, Ukrainian parent’s passport, and notarized translation of foreign documents.

## Timeline

Ukraine citizenship by descent applies when at least one parent was a Ukrainian citizen at the time of the child’s birth. Parents must register the child’s citizenship either at a Ukrainian Embassy abroad or through a DMS Ukraine citizenship application upon returning to Ukraine.

Key documents include the child’s birth certificate, Ukrainian parent’s passport, and notarized translation of foreign documents.

## Result, Validity

After getting Ukrainian citizenship, the applicant receives a certificate of acquisition of citizenship, valid for two years. During this period, it is necessary to apply for and receive a Ukrainian citizen’s passport. The passport of a citizen of Ukraine is issued in ID-card format for a 10-year term and must be renewed upon expiration.
`;
