import React, { useState, useRef } from "react";
import Upload from "rc-upload";
import ReactHtmlParser from "react-html-parser";

// import "bulma/css/bulma.css";
// import "material-design-icons/iconfont/material-icons.css";

import { Tabs, Tab } from "react-bootstrap";

import { Grid } from "../../components/Grid.components";
import { Button } from "../../components/Button.components";
import { Boxed } from "../../components/Boxed.components";
import { Text } from "../../components/Text.components";
import { Alert } from "../../components/Alert.components";
import { EditorComponent } from "../../components/Editor.components";
import { StyledTabs, Icon } from "../../components/style";

import {
  calcViewMode,
  getBase64,
  truncateText,
  printView,
} from "../../utils/utils";
import { Theme } from "../../utils/theme";

import { PDFReader } from "./style";

import EditForm from "./EditForm/index";

const dummyForm =
  '<p><strong>CONSULTING AGREEMENT</strong><strong>&nbsp;</strong></p>\n<p><strong>Made this ____ day of ______________, 20__</strong></p>\n<p><strong>At _______________</strong></p>\n<p><span style="font-weight: 400;">BETWEEN</span></p>\n<p><strong>________________________,</strong><span style="font-weight: 400;"> a limited liability company duly incorporated under the laws of the Federal Republic of Nigeria and having its office at _________________________________, hereinafter referred to as &ldquo;</span><strong>Consultant</strong><span style="font-weight: 400;">&rdquo; (which expression shall, where the context so admits, include its legal representatives, successors-in-title and assigns) of the one part;</span></p>\n<p><span style="font-weight: 400;">AND</span></p>\n<p><strong>________________________, </strong><span style="font-weight: 400;">a limited liability company duly incorporated under the laws of the Federal Republic of Nigeria and having its office at _________________________________ hereinafter referred to as &ldquo;</span><strong>Company</strong><span style="font-weight: 400;">&rdquo; (which expression shall, where the context so admits, include its legal representatives, successors-in-title and assigns) of the other part.</span></p>\n<p><span style="font-weight: 400;">Company and Consultant are collectively referred to herein as &ldquo;parties,&rdquo; in singular or plural usages, as required by context.&nbsp;</span></p>\n<p><strong>WHEREAS:</strong><span style="font-weight: 400;">&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">[Insert peculiar fact]/Consultant was retirement eligible at the Company and recently elected to retire from full time employment.</span></li>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">[Insert peculiar fact]/The Company wishes to retain the Consultant to perform part time consulting work for the Company on an exclusive basis subject to the terms of this Agreement.</span></li>\n</ol>\n<p><strong>IT IS HEREBY AGREED AS FOLLOWS:</strong><span style="font-weight: 400;">&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Term:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">This Agreement shall commence on ______________ (the &ldquo;</span><strong>Start Date</strong><span style="font-weight: 400;">&rdquo;) and Consultant shall provide the services detailed below for a period of ___ months from the Start Date to ____________________ (the &ldquo;</span><strong>Expiration Date</strong><span style="font-weight: 400;">&rdquo;). This Agreement may be extended or terminated sooner as provided below.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Services To Be Provided:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant will provide services relating to marketing and business development (the &ldquo;</span><strong>Services</strong><span style="font-weight: 400;">&rdquo;), as determined by the Company&rsquo;s President, _______________ or the Chief Executive Officer. Company shall determine the scope of the work to be performed, but the Consultant shall have the ability to select the means, manner and method of performing these services. Consultant shall have the right to perform the projects in such manner as Consultant deems appropriate. Consultant further shall have the right to dictate his hours of work, his reporting time, as well as how much work to perform on-site. Consultant, however, agrees to use his best efforts to promote the Company\'s interests, and to give the Company the benefit of his experience, knowledge, and skills. Consultant undertakes to perform services in a timely and professional manner and to devote such time, attention and skill to his duties under this Agreement as may reasonably be necessary to ensure the performance of the Services to Company&rsquo;s Chief Executive Officer&rsquo;s satisfaction.&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Nothing herein shall be deemed to preclude Company from retaining the Services of other persons or entities undertaking the same or similar services as those undertaken by Consultant hereunder or from independently developing or acquiring materials or programs that are similar to, or competitive with, the services.&nbsp;</span></li>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="1"><strong>Compensation:</strong><span style="font-weight: 400;">&nbsp;</span></li>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">In consideration of the performance of the Services and of the acceptance by the Consultant of the restrictive covenants set out in this Agreement, Company will pay Consultant based on a daily rate equal to the Consultant&rsquo;s most recent target cash compensation of [&euro;/$/N]______ (the &ldquo;</span><strong>Daily Rate</strong><span style="font-weight: 400;">&rdquo;). For the avoidance of doubt, the Daily Rate shall refer to the rate for a full day&rsquo;s work (i.e. 7.5 hours) and if the Consultant works on any given day for less than 7.5 hours, the Daily Rate should be adjusted proportionately.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">For the avoidance of doubt, the parties confirm that the total amount payable by the Company to the Consultant in respect of the Services under this Agreement shall not exceed [&euro;/$/N]_____________ (the &ldquo;</span><strong>Total Amount</strong><span style="font-weight: 400;">&rdquo;).&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">The Consultant shall invoice the Company for Services on a monthly basis. The Company shall discharge any valid invoice within 60 days of receipt of the valid invoice.&nbsp;</span></li>\n</ol>\n<li style="font-weight: 400;" aria-level="1"><strong>Consultant Generally Provides Tools:</strong><span style="font-weight: 400;">&nbsp;</span></li>\n</ol>\n<p><span style="font-weight: 400;">Consultant will provide all those materials, equipment and other tools necessary to perform the Services for the Company.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Reimbursement of Travel Expenses:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">During the term of this Agreement, Company will reimburse Consultant for his actual, reasonable, out-of-pocket expenses for travel in connection with his work under this Agreement. Consultant shall submit accurate and complete supporting documents for reimbursement of such expenses and shall follow any policies, requirements, or directions imposed by the Company in connection with such expenses.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Preservation of Company Confidential Information:&nbsp;</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant agrees at all times:&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Not to disclose to any third party any Confidential Information learned by Consultant at any time or any Confidential Information developed by Consultant pursuant to this Agreement; except such information which is now public or hereafter becomes published or otherwise generally available to the public other than through breach of this Agreement;&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">That Consultant will only disclose Confidential Information to employees, agents or sub-contractors of Consultant who have a need to know such information in order to carry out Consultant&rsquo;s responsibilities hereunder, and only then to those who have been advised that such information is confidential and proprietary and then only to those who have agreed to accept the same obligation of confidentiality and non-use as Consultant;&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Even after any Confidential Information obtained by Consultant or any Confidential Information developed by Consultant pursuant to this Agreement becomes generally available to the public, not to disclose the fact that such information was furnished to Consultant by Company, originated with Company, an Affiliate or Related Company, or was developed by Consultant pursuant to this Agreement, unless that fact is also published; and&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Not to put to commercial use or use in any way except for the benefit of Company any Confidential Information disclosed to Consultant or any Confidential Information developed by Consultant pursuant to this Agreement.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">As used herein, &ldquo;</span><strong>Confidential Information</strong><span style="font-weight: 400;">&rdquo; includes any non-public information Consultant receives directly or indirectly from the Company or acquired or developed in the course of his consultancy and any other non-public information received or developed by, or disclosed to, Consultant during the course of or arising out of his previous employment with the Company, including by way of example only, trade secrets (including organizational charts, employee information such as credentials, skill sets and background information), ideas, inventions, methods, designs, formulas, systems, improvements, prices, discounts, business affairs, products, product specifications, manufacturing processes, data and know-how and technical information of any kind whatsoever, unless such information has been publicly disclosed by authorized officials of the Company. In the event information which is non-public becomes public due to disclosure by Consultant which is not authorized by the Company, such information shall be deemed non-public for purposes of this Agreement.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">For the avoidance of doubt, the Consultant may disclose the Confidential Information to the extent required by law or order of a court or governmental agency. However, in such case, the Consultant must give the Company prompt notice and consult with the Company about whether to obtain a protective order or otherwise protect the confidentiality of the Confidential Information, all as directed by and at the Company&rsquo;s expense.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Great loss and immediate and irreparable injury may be suffered by the Company if the Consultant should breach or violate any of the covenants and agreements set forth in this clause. The parties agree that such covenants and agreements are reasonably necessary to protect and preserve the Company&rsquo;s interests.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>Intellectual Property:&nbsp;</strong></li>\n</ul>\n<p><span style="font-weight: 400;">As a material condition to which Consultant agrees in exchange for the opportunity to provide the Services, Consultant expressly acknowledges and agrees that all reports, documents, improvements, discoveries, inventions, processes, designs, plans, and trade secrets, whether of a technical nature or not, made or developed by Consultant alone or in conjunction with any other person or entity while providing the Services or developed by the Consultant during the course of or arising out of his previous employment with the Company, which relate to or affect the business of Company (&ldquo;</span><strong>Intellectual Property</strong><span style="font-weight: 400;">&rdquo;), shall be the sole and exclusive property of Company. Consultant expressly agrees to disclose and reveal to Company all Intellectual Property, and all information regarding Intellectual Property, concurrent with the discovery or development of the Intellectual Property. Consultant hereby assigns to Company all rights, title, and interests in any Intellectual Property. Consultant agrees that he will not use or disclose any Intellectual Property owned by the Company to benefit a competitor, customer, individual, or other entity without the express written permission of the Chief Executive Officer. The Consultant irrevocably appoints the Company as his attorney and, in his name and on his behalf, to execute and do any instrument or thing and generally to use his name for the purpose of giving to the Company or its nominee the full benefit of the provisions of this clause 7.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Surrender of Material upon Termination of Agreement:&nbsp;</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Upon termination of this Agreement, Consultant shall return immediately to the Company all Intellectual Property (including all books, records, notes, data and information relating to Company or its business and all other Company property), and will so certify in writing that he has done so.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Independent Contractor:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant shall perform his duties as an independent contractor and not as an employee.&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Accordingly, Consultant and Company each acknowledge and agree that Consultant will not be treated as an employee for purposes of any applicable law covering the employer-employee relationship. Consultant further acknowledges that he is responsible for his own taxation affairs and for the payment of any taxation due in respect of the payment to the Consultant in connection with the provision of Services by the Consultant under this Agreement; and that he understands his responsibilities with respect to the payment of these taxes. The Consultant agrees to indemnify the Company against all losses, costs, demands, damages, expenses and claims howsoever incurred by the Company in relation to the taxation treatment of the payments made under this Agreement or as a result of the breach by the Consultant of any of the terms of this Agreement.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>No Benefits:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">The parties agree that by virtue of the provision of the Services under this Agreement, Consultant shall not be entitled to any Company benefits pursuant to this Agreement, including but not limited to life insurance, death benefits, accident and health insurance, qualified pension or retirement plan or other benefits.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Contracting Power:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">In no event shall Consultant have any power or authority to bind Company in any manner, it being expressly understood that Consultant is an independent contractor and not an agent or employee of Company. No form of joint venture, partnership, or similar relationship between the parties is intended or hereby created as a result of the entry into or performance by the parties of this Agreement.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Performing Services for Others:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">The consultancy arrangements contemplated by this Agreement shall be on an exclusive basis. The Consultant shall not during the course of this Agreement, without the prior written consent of the Chief Executive Officer of the Company, provide any services whether on a consultancy or other basis to any legal or natural person or other entity engaged in the manufacture, distribution, sale or marketing of any products in competition with the Company&rsquo;s Products. For the purposes of this clause 12, the term &ldquo;Products\'\' shall mean [Insert range of products] or any other product which the Company manufactures, distributes, sells or markets during the term of this Consultancy Agreement.&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="1"><strong>Termination:</strong><span style="font-weight: 400;">&nbsp;</span></li>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">This Agreement shall be terminable by either party, with or without breach, and for any reason and without prior notice.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">In the event the Company terminates this Agreement without Material Breach or the Agreement expires, the Company shall pay to the Consultant a sum equal to the unpaid balance of the Total Amount.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">In the event Company terminates this Agreement for a Material Breach or Consultant terminates this Agreement, Company&rsquo;s sole liability to Consultant shall be to pay Consultant for any unpaid amounts earned and accrued hereunder through the date of termination.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">In the event that the parties wish to extend this Agreement beyond the Expiration Date, the parties will mutually agree in writing to the extension no later than 30 days prior to the Expiration Date. If the parties do not mutually agree to extend this Agreement as of 30 days prior to the Expiration Date, this Agreement will terminate on the Expiration Date.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">For purposes of this Agreement, termination for Material Breach means termination by the Company because of :</span></li>\n</ol>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Consultant&rsquo;s willful engagement in illegal conduct or gross misconduct pursuant to which the Company has suffered a loss;</span></li>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">Consultant&rsquo;s willful and continued failure to perform substantially all of his duties hereunder in any material respect; or&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">without prejudice to the generality of Clause (ii) any breach by the Consultant of any covenant set out in each of Clause 19 and 21 of this Agreement; provided, however, that in the case of Clause (ii) and Clause (iii), Company must provide written notice of such breach or failure within thirty (30) days from such written notice to cure such breach or failure.&nbsp;</span></li>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Following the termination or expiry of this Agreement, Consultant shall cooperate reasonably on a time and materials basis with Company in its, or another&rsquo;s efforts on Company&rsquo;s behalf, to complete any Services in progress as of the effective date of termination and to provide for an orderly transition provided that such support continues for no longer than 60 days from the effective date of termination.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Notwithstanding the termination or expiry of this Agreement, the obligations pursuant to Clause 6 (Confidential Information), 7 (Intellectual Property), 9 (Independent Contractor), 13 (Termination), 19 (Restrictive Covenants), 21 (Publicity) and 22 (Release) shall remain binding on the parties unless each party is expressly released by the other party in writing.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>Consultant&rsquo;s Representations/Warranties and Covenants:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant represents, warrants and covenants to Company the following:&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Consultant has the full power and authority to enter into this Agreement without the consent or approval of any other person, including any present or previous employer except ____________; and&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Consultant\'s execution, delivery and performance of this Agreement will not violate or cause a breach of any existing employment, consultant or any other agreement, covenant, promise or any other duties by which Consultant is bound, including confidentiality obligations or covenants not to compete including any present or previous employer except __________.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>Assignment:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">The rights and obligations of the Company under this Agreement shall inure to the benefit of and shall be binding upon the successors and assigns of the Company. The rights and obligations of a Consultant are non-assignable.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Limitation of Liability:&nbsp;</strong></li>\n</ul>\n<ol>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Neither party is assuming any liability for the actions or omissions of the other party except as stated in this Agreement. The Company shall indemnify Consultant for claims arising out of Consultant&rsquo;s performance of the Services unless such claims arise from Consultant&rsquo;s gross negligence or willful misconduct in connection with the performance of his work hereunder.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Notwithstanding any provision to the contrary, nothing in this Agreement limits or excludes either party&rsquo;s liability to the extent it relates to: death or personal injury caused by its negligence; fraud; fraudulent misrepresentation; or any other liability which may not be lawfully limited or excluded.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Neither party shall be liable for consequential, special, incidental or indirect losses including, without limitation:&nbsp;</span></li>\n</ol>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">loss of profits, revenue or goodwill;&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">loss of business; or&nbsp;&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">loss of anticipated savings.</span></li>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Each party agrees to use all reasonable endeavours to mitigate any losses which it may suffer under or in connection with this Agreement (including in relation to any losses covered by an indemnity) and any amounts it seeks from the other party in respect of any such liability.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>Compliance with Rules:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant shall fully comply with all of the Company&rsquo;s working and safety rules, working hours and holiday schedules when working at Company&rsquo;s facility(ies) or premises, and other Company rules and regulations, and Consultant shall be responsible for Consultant&rsquo;s actions while on Company premises or otherwise providing the Services requested by Company. Consultant, at its own cost, shall procure, maintain, and keep in full force and effect insurance to protect Consultant and the Company in accordance with good industry practice from all claims that arise out of or result from Consultant&rsquo;s performance under this Agreement. On request from the Company, the Consultant shall provide evidence, satisfactory to the Company, of the existence or, as the case may be, the renewal of the insurance.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Compliance with the Law:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">During the performance of the Services, Consultant, at his own expense and at all times, shall comply with any and all laws and ordinances and any and all rules, regulations, and orders of public authorities applicable thereto, including, but not limited to, tax and social welfare laws, applicable worker&rsquo;s compensation laws, unemployment insurance requirements, employer&rsquo;s liability requirements, and minimum wage. Consultant shall file all reports required to be filed in the name of Consultant and pay all taxes, fees and charges required by laws, rules, regulations, and orders, and shall, without reimbursement by Company, indemnify Company against any and all liabilities and penalties by reason of any failure on the part of Consultant to comply with any such laws, orders, rules, and regulations.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Restrictive Covenants:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">In the course of the provision of the Services, the Consultant is likely to obtain knowledge or trade secrets of the Company, particularly in the area of [Insert range of products]. Accordingly, Consultant agrees that during the term of this Agreement and for a period of two years from the date of the termination or expiry of the Agreement, Consultant shall not, without the prior written consent of the&nbsp; ______________:&nbsp;</span></p>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Directly or indirectly employ, or solicit the employment of (whether as an employee, officer, director, agent, consultant or independent contractor) any person(s) who is or was at any time during the previous year an officer, director, representative, agent or employee of the Company. If Consultant breaches this clause, it shall promptly pay to the Company a sum equal to the annual salary of the employee(s) in question (net of benefits) and the parties agree that this amount is a genuine pre-estimate of the loss that the Company is likely to suffer as a result of such breach, or&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">Directly or indirectly carry on, be engaged, assist or otherwise provide or perform any services of any nature to, for or on behalf of any legal or natural person or any other entity engaged in the manufacture, distribution, sale or marketing of any products in competition with the Company&rsquo;s Products. For purposes of this paragraph, the term &ldquo;Products&rdquo; shall mean [Insert product range] or any other product which the Company manufactures, distributes, sells or markets during the term of this Consultancy Agreement and for the 2 year period following the date of termination.</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">The Consultant acknowledges and agrees that the restrictions set out in this Clause 19 are reasonable and necessary to protect the interests of the Company.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>Severability and Enforcement:</strong></li>\n</ul>\n<ol>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">In the event of a breach of threatened breach by Consultant of Clauses 6, 7, 8, 12, 15, 19 or 21 of this Agreement, Company shall be entitled to a temporary restraining order and/or a permanent injunction restraining Consultant from breaching the same. Nothing contained herein shall be construed as prohibiting Company from pursuing any other remedies available to it for such breach or threatened breach, including the recovery of damages from Consultant. In any dispute over the enforcement of a party&rsquo;s rights under this Agreement, each party shall be responsible for its own legal and other professional fees incurred in enforcing its rights under this Agreement.&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">If any provision of this Agreement is invalid or unenforceable by a court of law:&nbsp;</span></li>\n</ol>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">such provision shall be deemed to be amended so that the intent of the parties is fulfilled to the greatest extent possible; and&nbsp;&nbsp;</span></li>\n<li style="font-weight: 400;" aria-level="1"><span style="font-weight: 400;">it would not affect the validity or enforceability of any other provision of this Agreement, which shall remain in full force and effect.&nbsp;</span></li>\n</ol>\n<ol>\n<li style="font-weight: 400;" aria-level="2"><span style="font-weight: 400;">A waiver by Company or Consultant of a breach of any provision of this Agreement by the other party shall not operate or be construed as a waiver of any subsequent breach by the other party.&nbsp;</span></li>\n</ol>\n<ul>\n<li aria-level="1"><strong>Publicity:&nbsp;</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant shall not publicize or disclose the existence of this Agreement nor any information regarding any other terms and conditions of this Agreement (including but not limited to Company&rsquo;s identity) except on a need to know basis to its professional advisors and employees or agents (if any) in order to perform Consultant&rsquo;s obligations under this Agreement, unless the Company has given its prior written consent to any such disclosure or publicity. For the avoidance of doubt, the Consultant agrees, during the term of this Agreement and thereafter, not to engage in any form of conduct or make any statements or representations that disparage, portray in a negative light, or otherwise impair the reputation, goodwill or commercial interests of the Company, or its past, present and future subsidiaries, divisions, affiliates, successors, officers, directors, attorneys, agents and employees.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Release:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">In consideration of the matters set out in this Agreement and for the avoidance of doubt, Consultant, on his own behalf and on behalf of any person who may claim by or through the Consultant, irrevocably and unconditionally waives, discharges and releases the Company and/or its respective officers, directors, attorneys, agents and employees from any and all claim or causes of action that the Consultant had, has or may have, known or unknown, relating to or arising out of the Consultant&rsquo;s previous employment with the Company including those arising out of the Constitution, contract, common law, in equity, statute (in particular, but not limited to the ___________________), any and all claims to any form of legal or equitable relief, damages or for any legal or other professional fees or other costs. The Consultant waives, releases and compromises any and all claims to take a personal injuries claim against the Company, and/or its respective officers, directors, attorneys, agents and employees. Consultant additionally releases and waives any claim or right he may have to recover in any lawsuit or proceeding against the Company brought by the Consultant, an administrative agency, or any other person on behalf of the Consultant which includes the Consultant in any class.</span></p>\n<ul>\n<li aria-level="1"><strong>Governing Law and Venue:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant agrees that the construction, interpretation, and performance of this Agreement shall be governed by the laws of [Insert Territory], including conflict of law. It is agreed that any controversy, claim or dispute between the parties, directly or indirectly, concerning this Agreement or the breach thereof shall only be resolved in the courts of [Insert Territory], and the parties hereby submit to the exclusive jurisdiction of said courts, provided however that nothing contained in this Clause 23 shall limit the right of a party to bring enforcement proceedings in another jurisdiction on foot of an order of an [Insert Territory] court or other proceedings seeking provisional or protective relief. This Agreement shall not be construed against the party preparing it but shall be construed as if both parties jointly prepared this Agreement, and any uncertainty and ambiguity shall not be interpreted against any one party.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Entire Agreement; Amendment:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant agrees that this Agreement (together with the Employee Confidentiality Agreement dated _______________ [If Any]) constitutes the entire agreement between him and Company with respect to the matters contemplated by this Agreement, and that this Agreement and supersedes any and all prior and/or contemporaneous written and/or oral agreements relating to such matters. Consultant acknowledges that this Agreement may not be modified except by written document, signed by him and a duly authorized officer of the Company.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Consultant Acknowledgment:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Consultant acknowledges that he has had the opportunity to obtain independent legal advice in regard to this Agreement, that he has read and understood this Agreement, that he is fully aware of its legal effect, and that he has entered into it freely and voluntarily and based on his own judgment and not on any representations or promises other than those contained in this Agreement.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Counterparts:</strong></li>\n</ul>\n<p><span style="font-weight: 400;">This Agreement may be executed simultaneously in one or more faxed counterparts, any one of which need not contain the signatures of more than one party, but all such counterparts taken together shall constitute one and the same Agreement.&nbsp;</span></p>\n<ul>\n<li aria-level="1"><strong>Notices:&nbsp;</strong></li>\n</ul>\n<p><span style="font-weight: 400;">Any notices required to be sent by a party under this Agreement shall be given in writing and shall be deemed to have been duly given if sent by registered prepaid post to the last known address of the other party. Any such notice shall be deemed to have been given two working days after registered prepaid posting or in the case of a notice delivered personally at the time of delivery.&nbsp;</span></p>\n<p><strong>IN WITNESS WHEREOF, Company and Consultant have duly executed and delivered this Agreement as of the day first written above.</strong><span style="font-weight: 400;">&nbsp;</span></p>\n<p><strong>Signed, Sealed and Delivered</strong></p>\n<p><strong>By the Consultant:</strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong> </strong><strong>For the Company:&nbsp;</strong></p>\n<p><span style="font-weight: 400;">Signature: __________________ </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;"> </span><span style="font-weight: 400;">Signature: ______________&nbsp;</span></p>\n<p><span style="font-weight: 400;">Position: _______________&nbsp;</span></p>';

export const Reader = (props) => {
  // State props received
  const { bookList, activeTab, editFormModal } = props;

  //dispatch props receieved
  const { redirect, saveReader, openEditForm } = props;

  const editorRef = useRef(null);
  const [form, setForm] = useState("");

  const [key, setKey] = useState(activeTab);
  const [file, setFile] = useState({});

  let viewMode = calcViewMode();
  let errors;

  //
  const removeItem = (data) => {
    let newList = [...bookList];
    const existIndex = newList.findIndex(
      (item) => `${item.id}-${item.name}` === `${data.id}-${data.name}`
    );
    if (existIndex > -1) {
      newList.splice(existIndex, 1);
      saveReader({ bookList: [...newList] });
    } else {
      console.log(data);
    }
  };
  // handle logic for uploading an image
  const beforeUpload = (file) => {
    console.log(file);
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      Alert.error("You can only upload PDF file!");
    }
    const isLt100M = file.size / 1024 / 1024 < 100;
    if (!isLt100M) {
      Alert.error("Image must be smaller than 100MB!");
    }
    if (isPDF && isLt100M) {
      handleFileUploader(file);
      return isPDF && isLt100M;
    }
  };

  const handleFileUploader = (file) => {
    getBase64(file).then((data) => {
      const base64Data = data.split(",")[1];
      setFile({
        pdf: file,
        base64: base64Data,
        format: file.type,
        name: file.name,
      });
      console.log(base64Data);
    });
  };

  const handleEditorChange = (content) => {
    this.setForm(content);
  };

  return (
    <Boxed
      margin="20px"
      pad="20px 0"
      border={`1px solid ${Theme.PrimaryBorderColor}`}
      borderRadius={Theme.TertiaryRadius}
      bColor={Theme.TertiaryDark}
    >
      <StyledTabs>
        <Tabs
          id="controlled-tab-example"
          activeKey={key}
          onSelect={(k) => setKey(k)}
        >
          <Tab eventKey="BOOK" title="Book">
            <Boxed pad="20px">
              upload file here
              {file.base64 ? (
                <Boxed display="flex">
                  <Icon
                    className="icon-file-text"
                    fontSize="25px"
                    margin="auto 5px auto 0"
                    color={Theme.PrimaryTextColor}
                  />{" "}
                  <Text margin="auto 5px"> {file.name}</Text>{" "}
                  <Button xs pale margin="auto 0" onClick={() => setFile({})}>
                    Remove
                  </Button>
                </Boxed>
              ) : (
                <Upload
                  type="drap"
                  multiple={false}
                  beforeUpload={(pdf) => beforeUpload(pdf)}
                  onChange={() => {}}
                >
                  <Boxed
                    height="150px"
                    width="100%"
                    border={`1px dashed ${Theme.SecondaryTextColor}`}
                    bColor={`${Theme.SecondaryDark}50`}
                    display="flex"
                  >
                    <Boxed margin="auto" align="center">
                      <Icon
                        className="icon-upload-cloud"
                        fontSize="35px"
                        color={Theme.PrimaryTextColor}
                      />
                      <Text>Click or drag pdf file here to upload. </Text>
                    </Boxed>
                  </Boxed>
                </Upload>
              )}
              <hr />
              {file.base64 && (
                <PDFReader
                  document={{
                    //   url: "https://arxiv.org/pdf/quant-ph/0410100.pdf",
                    base64: file.base64,
                  }}
                />
              )}
            </Boxed>
          </Tab>
          <Tab eventKey="editor" title="Editor">
            {/* <EditorComponent
                // onInit={(evt, editor) => (editorRef.current = editor)}
                value={form}
                onEditorChange={(content) => setForm(content)}
              /> */}
            <Boxed pad={viewMode === "mobile" ? "10px" : "20px"}>
              <Grid
                desktop="200px auto"
                tablet="200px auto"
                mobile="repeat(1, 1fr)"
              >
                <Boxed>
                  <Boxed pad="10px 0">
                    <Button
                      block
                      pale
                      onClick={() => {
                        openEditForm({
                          file: dummyForm,
                          name: "Consultany Agreement",
                        });
                      }}
                    >
                      Edit Form
                    </Button>
                  </Boxed>
                  <Boxed pad="10px 0">
                    <Button block onClick={() => printView(dummyForm)}>
                      Print Form
                    </Button>
                  </Boxed>
                </Boxed>
                <Boxed
                  pad="5px"
                  borderRadius={Theme.PrimaryBorderRadius}
                  background={Theme.PrimaryDark}
                >
                  <Boxed
                    pad={viewMode === "mobile" ? "10px 5px" : "20px 30px"}
                    background={Theme.TertiaryDark}
                    maxHeight="80vh"
                    overflowY="scroll"
                  >
                    {ReactHtmlParser(dummyForm)}
                  </Boxed>
                </Boxed>
              </Grid>
            </Boxed>
          </Tab>

          {bookList.map((item) => {
            const { data, type, id } = item;
            if (type === "word") {
              return (
                <Boxed pad={viewMode === "mobile" ? "0" : "20px"}>
                  <Grid
                    desktop="200px auto"
                    tablet="200px auto"
                    mobile="repeat(1, 1fr)"
                  >
                    <Boxed>
                      <Boxed pad="10px 0">
                        <Button
                          block
                          pale
                          onClick={() => {
                            openEditForm(data);
                          }}
                        >
                          Edit Form
                        </Button>
                      </Boxed>
                      <Boxed pad="10px 0">
                        <Button block onClick={() => printView(dummyForm)}>
                          Print Form
                        </Button>
                      </Boxed>
                    </Boxed>
                    <Boxed
                      pad="5px"
                      borderRadius={Theme.PrimaryBorderRadius}
                      background={Theme.PrimaryDark}
                    >
                      <Boxed
                        pad="10px"
                        background={Theme.TertiaryDark}
                        maxHeight="80vh"
                        overflowY="scroll"
                      >
                        {ReactHtmlParser(data?.file)}
                      </Boxed>
                    </Boxed>
                  </Grid>
                </Boxed>
              );
            }
            return (
              <Tab
                eventKey={id}
                title={
                  <Text fontWeight="bold">
                    {truncateText(data?.name, 15)}{" "}
                    <Icon
                      onClick={() => removeItem(item)}
                      className="icon icon-x"
                    />
                  </Text>
                }
              >
                <Boxed pad="20px">
                  {data?.file && (
                    <PDFReader
                      document={{
                        base64: data?.file,
                      }}
                    />
                  )}
                </Boxed>
              </Tab>
            );
          })}
        </Tabs>
      </StyledTabs>
      {editFormModal && <EditForm />}
    </Boxed>
  );
};
