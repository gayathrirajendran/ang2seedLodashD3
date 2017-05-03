import {Component,ViewChild, OnInit, OnChanges, Input, ElementRef} from '@angular/core';

import * as _ from 'lodash';
import * as d3 from 'd3';

@Component({
  selector: 'app',
  template: '<div #container></div>',
})
export class AppComponent implements OnInit {

  @ViewChild('container') private chartContainer: ElementRef;
  private node; private nodeAll; nodeEnter; nodeRect; link; linkEnter; coloredline; svg; nodes;
  
    barHeight = 30;
    barWidth = 400;
    i = 0;
    duration = 400;
    root;
    tempForeignObj;
tempTextBody;
 topPaddingForFirstLine;
maxSvgHeight = 0;
  //@Input() data: any;
  data = {
  "type": "root",
  "name": " Country Strategy: Republic of the Philippines",
  "x0": 0,
  "y0": 0,
  "code": "root",
  "children": [
    {
      "type": "pillar",
      "name": "Strategic Objective 1: Stable Macro Economy",
      "nameview": "1. Strategic Objective 1: Stable Macro Economy",
      "number": "1",
      "code": "CAT0024437",
      "comments": "",
      "children": [
        {
          "type": "outcome",
          "name": "Maintained tax effort through strengthened tax administration and tax policy reform",
          "nameview": "1.1 Maintained tax effort through strengthened tax administration and tax policy reform",
          "number": "101",
          "code": "GOL0003230",
          "comments": "According to the new GDP figures, the tax effort in 2009 was only 12.2% and it fell further to 12.1% in 2010. Moreover, between 2009 and 2010, the overall revenue to GDP ratio fell from 14 to 13.5% of GDP. The previous Congress was dissolved without having passed the fiscal incentives and tobacco excise tax rationalization laws.  The new Government has not yet passed any revenue-enhancing measures which are needed for any significant increases in revenue collections. As a result, there is only a mild increase in the tax-to-GDP ratio between the first semester of 2010 and the first semester of 2011 of 0.1% of GDP. Tax policy measures are urgently needed. However, the fiscal incentives rationalization bills currently in Congress are not an improvement over the current system; the Department of Finance (DoF) is working on getting a better version of their own to be introduced in the Senate.\r\rThe new Commissioner passed a good high-level medium-term strategic plan for tax administration reform for the 2011-2016 period. However, the detailed implementation plan has not yet been finalized. The Bureau of Internal Revenue (BIR) also formally adopted a set of agency-level key performance indicators conforming to good international practice. Baseline data for 2011 is to be produced. No significant turnover in high-level management positions at BIR has taken place yet and implementation progress of the tax reform plan is under watch.",
          "status": "026",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003230",
              "children": [
                {
                  "type": "indicator",
                  "name": "Tax/GDP ratio",
                  "nameview": "19.1 Tax/GDP ratio",
                  "number": "1901",
                  "code": "IN00002382",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Nonfinancial public sector debt/GDP",
                  "nameview": "19.2 Nonfinancial public sector debt/GDP",
                  "number": "1902",
                  "code": "IN00002383",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003230",
              "children": [
                {
                  "type": "project",
                  "name": "P101964 - Albania Development Project.",
                  "code": "GOL0003230_P101964"
                },
                {
                  "type": "project",
                  "name": "P107171 - Albania Development Project.",
                  "code": "GOL0003230_P107171"
                },
                {
                  "type": "project",
                  "name": "P113403 - Albania Development Project.",
                  "code": "GOL0003230_P113403"
                },
                {
                  "type": "project",
                  "name": "P117504 - Albania Development Project.",
                  "code": "GOL0003230_P117504"
                },
                {
                  "type": "project",
                  "name": "P117925 - Albania Development Project.",
                  "code": "GOL0003230_P117925"
                },
                {
                  "type": "project",
                  "name": "P118583 - Albania Development Project.",
                  "code": "GOL0003230_P118583"
                },
                {
                  "type": "project",
                  "name": "P118625 - Albania Development Project.",
                  "code": "GOL0003230_P118625"
                },
                {
                  "type": "project",
                  "name": "P118931 - Albania Development Project.",
                  "code": "GOL0003230_P118931"
                },
                {
                  "type": "project",
                  "name": "P121982 - Albania Development Project.",
                  "code": "GOL0003230_P121982"
                },
                {
                  "type": "project",
                  "name": "P123403 - Albania Development Project.",
                  "code": "GOL0003230_P123403"
                },
                {
                  "type": "project",
                  "name": "P126520 - Albania Development Project.",
                  "code": "GOL0003230_P126520"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Improved efficiency and targeting of public expenditures",
          "nameview": "1.2 Improved efficiency and targeting of public expenditures",
          "number": "102",
          "code": "GOL0003231",
          "comments": "The 2011 budget is an improvement over previous years' budgets in terms of expenditure efficiency for inclusive growth. However, in part because of haste in putting together the budget, quality control measures that should have been taken during the budget preparation process have been implemented during the budget execution phase resulting in long delays in release of Special Allotment Release Orders (SARO) and notices of cash allocation. This has led to important delays in budget execution in key departments such as education, health, public works and social welfare. Most delays were in capital expenditures, which posted a 58% execution rate for Q1-Q3. Moreover, the accumulating pressure on government to speed up expenditures now may weaken quality as the year draws to a close. This highlights the importance of improving the budget preparation process, transparency measures and ex-post audit and minimizing controls during the budget execution phase. Some new control measures, however, such as adequate contract packaging and strict implementation of procurement regulation, are well-taken and are leading to important reductions in contract costs in the Department of Public Works and Highways (DPWH). Expenditure evaluation capacity is in the process of being strengthened through the zero-based budgeting approach/ program evaluation in the 2011 to 2014 budgets. Simultaneously, there is a need to further strengthen budget preparation (not just on projects selected through the zero-based budgeting approach) and transparency so infrastructure projects having previously passed adequate feasibility studies and a rigorous selection process by the executive are properly identified in the budget presented for congressional approval. Currently, neither lump-sum items left to the executive’s discretion nor Congress-selected projects without technical scrutiny follow this process and these are some of the most inefficient expenditures in the budget.",
          "status": "025",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003231",
              "children": [
                {
                  "type": "indicator",
                  "name": "Forward Estimates (FE) and Paper on Budget Strategy (PBS) as input for annual budget formulation",
                  "nameview": "20.1 Forward Estimates (FE) and Paper on Budget Strategy (PBS) as input for annual budget formulation",
                  "number": "2001",
                  "code": "IN00002384",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003231",
              "children": [
                {
                  "type": "project",
                  "name": "P109434 - Albania Development Project.",
                  "code": "GOL0003231_P109434"
                },
                {
                  "type": "project",
                  "name": "P115229 - Albania Development Project.",
                  "code": "GOL0003231_P115229"
                },
                {
                  "type": "project",
                  "name": "P117504 - Albania Development Project.",
                  "code": "GOL0003231_P117504"
                },
                {
                  "type": "project",
                  "name": "P117605 - Albania Development Project.",
                  "code": "GOL0003231_P117605"
                },
                {
                  "type": "project",
                  "name": "P118471 - Albania Development Project.",
                  "code": "GOL0003231_P118471"
                },
                {
                  "type": "project",
                  "name": "P118517 - Albania Development Project.",
                  "code": "GOL0003231_P118517"
                },
                {
                  "type": "project",
                  "name": "P118527 - Albania Development Project.",
                  "code": "GOL0003231_P118527"
                },
                {
                  "type": "project",
                  "name": "P118931 - Albania Development Project.",
                  "code": "GOL0003231_P118931"
                },
                {
                  "type": "project",
                  "name": "P122574 - Albania Development Project.",
                  "code": "GOL0003231_P122574"
                },
                {
                  "type": "project",
                  "name": "P122581 - Albania Development Project.",
                  "code": "GOL0003231_P122581"
                },
                {
                  "type": "project",
                  "name": "P122582 - Albania Development Project.",
                  "code": "GOL0003231_P122582"
                },
                {
                  "type": "project",
                  "name": "P123403 - Albania Development Project.",
                  "code": "GOL0003231_P123403"
                },
                {
                  "type": "project",
                  "name": "P126580 - Albania Development Project.",
                  "code": "GOL0003231_P126580"
                },
                {
                  "type": "project",
                  "name": "P129377 - Albania Development Project.",
                  "code": "GOL0003231_P129377"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Improved management of key fiscal and financial sector risks",
          "nameview": "1.3 Improved management of key fiscal and financial sector risks",
          "number": "103",
          "code": "GOL0003232",
          "comments": "A Financial Sector Assessment Program (FSAP) update carried out in November 2009 (updated every 3-4 years) was positive on banking system risks and their management. Overall, the performance of the financial system remains satisfactory. Key prudential regulation requirements continue to be met. \r\rFollowing last year’s publication of its first Fiscal Risk Statement (FRS), the Government intends to publish its second FRS as part of the 2012 budget. This puts the Philippines among best practice countries in terms of comprehensive fiscal risk assessment and disclosure. It should also ensure that the country makes significant progress in managing highlighted risks. Standards & Poor’s, Fitch, and Moody’s upgraded their sovereign credit rating for the Philippines to one notch below investment grade in November 2010 and June 2011.",
          "status": "026",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003232",
              "children": [
                {
                  "type": "indicator",
                  "name": "Regulatory requirements (for capital adequacy ratio, liquidity, non-performing loan provisioning)",
                  "nameview": "21.1 Regulatory requirements (for capital adequacy ratio, liquidity, non-performing loan provisioning)",
                  "number": "2101",
                  "code": "IN00002385",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Commercial banks' distressed asset ratio",
                  "nameview": "21.2 Commercial banks' distressed asset ratio",
                  "number": "2102",
                  "code": "IN00002386",
                  "comments": "Distressed assets = Non-Performing Assets (NPA) + Performing Restructured Loans (RL) / Total Loan Portfolio, Gross + Real and Other Acquired Assets, Gross + Per                                                    forming Sales Contract Receivables"
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003232",
              "children": [
                {
                  "type": "project",
                  "name": "P109434 - Albania Development Project.",
                  "code": "GOL0003232_P109434"
                },
                {
                  "type": "project",
                  "name": "P113576 - Albania Development Project.",
                  "code": "GOL0003232_P113576"
                },
                {
                  "type": "project",
                  "name": "P113577 - Albania Development Project.",
                  "code": "GOL0003232_P113577"
                },
                {
                  "type": "project",
                  "name": "P117145 - Albania Development Project.",
                  "code": "GOL0003232_P117145"
                },
                {
                  "type": "project",
                  "name": "P117504 - Albania Development Project.",
                  "code": "GOL0003232_P117504"
                },
                {
                  "type": "project",
                  "name": "P118931 - Albania Development Project.",
                  "code": "GOL0003232_P118931"
                },
                {
                  "type": "project",
                  "name": "P123403 - Albania Development Project.",
                  "code": "GOL0003232_P123403"
                },
                {
                  "type": "project",
                  "name": "P126760 - Albania Development Project.",
                  "code": "GOL0003232_P126760"
                },
                {
                  "type": "project",
                  "name": "P127483 - Albania Development Project.",
                  "code": "GOL0003232_P127483"
                },
                {
                  "type": "project",
                  "name": "P128829 - Albania Development Project.",
                  "code": "GOL0003232_P128829"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "pillar",
      "name": "Strategic Objective 2: Improved Investment Climate",
      "nameview": "2. Strategic Objective 2: Improved Investment Climate",
      "number": "2",
      "code": "CAT0024438",
      "comments": "",
      "children": [
        {
          "type": "outcome",
          "name": "Increased investment and employment in rural and urban development",
          "nameview": "2.1 Increased investment and employment in rural and urban development",
          "number": "201",
          "code": "GOL0003211",
          "comments": "Implementing Rules and Regulations approved for land-related laws. Findings of AAA on agribusiness development being implemented. Typhoon Ondoy and Pepeng and succeeding typhoons have caused heavy damages and losses but required rehabilitation and restoration have not been quick.\r\rCompleted studies include Domestic Resource Cost Analysis of Selected Agricultural Commodities (competitiveness study); Infrastructure Constraints to the Growth of the Non-Farm Sector; Inclusive Agribusiness Growth Study (assessed economic significance of linkages between agriculture and the other economic sectors in terms of value-adding and employment); and Competitive Agribusiness Industry Cluster Study (identified clusters at production and value chain level across regions and their role in promoting competitiveness).\r\rMRDP2 value of investments in completed sub-projects (as of October 2011) include Rural infrastructure (Php472 million, with additional Php4.4 billion worth of infrastructure under various stages of bidding and implementation); Community Fund for Agricultural Development –livelihood (Php220 million); and Natural Resources Management (Php52 million).\r\rARCDP2 Outcome/Impact (based on ICR) include increase in average real net household income (21% - 41% vs. 20% target; baseline about Php65,000.00); increase in cropping intensity (198% vs. 140% target); and increase in average yield per hectare (17%-21% vs. 15% target).\r\rA set of policy notes, “An Agenda for Urban Competitiveness and Inclusivity,” was prepared and completed under the auspices of the Government-led and Bank-supported Philippines Urban Consortium (PUC), and has contributed to the preparation of the Philippines Development Plan (PDP) and Public Investment Program (PIP).  The inputs from the PUC outputs are reflected in the urban section of the PDP.\r\rThe PUC is facilitating the implementation of the National Urban Development and Housing Framework (NUDHF, 2010-2016).  Key recommendations in the NUDHF have been pursued by technical working groups of the PUC whose work plans are based on the key shelter reforms and priority activities identified by the NUDHF.\r\rSixty-four Local Government Units (LGUs) and one public utility provider (water district) have accessed SSLDIP.  Subprojects proposed by the private sector are in the pipeline.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003211",
              "children": [
                {
                  "type": "indicator",
                  "name": "Total household incomes of target beneficiaries in WBG-assisted projects",
                  "nameview": "1.1 Total household incomes of target beneficiaries in WBG-assisted projects",
                  "number": "101",
                  "code": "IN00002341",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Business assets of target households",
                  "nameview": "1.2 Business assets of target households",
                  "number": "102",
                  "code": "IN00002342",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003211",
              "children": [
                {
                  "type": "project",
                  "name": "P088926 - Albania Development Project.",
                  "code": "GOL0003211_P088926"
                },
                {
                  "type": "project",
                  "name": "P108874 - Albania Development Project.",
                  "code": "GOL0003211_P108874"
                },
                {
                  "type": "project",
                  "name": "P110065 - Albania Development Project.",
                  "code": "GOL0003211_P110065"
                },
                {
                  "type": "project",
                  "name": "P114930 - Albania Development Project.",
                  "code": "GOL0003211_P114930"
                },
                {
                  "type": "project",
                  "name": "P116084 - Albania Development Project.",
                  "code": "GOL0003211_P116084"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Increased delivery and access to financial services",
          "nameview": "2.2 Increased delivery and access to financial services",
          "number": "202",
          "code": "GOL0003212",
          "comments": "Discussions have been revived on the credit bureau with the SEC and the Credit Information Corporation (CIC) following the appointment of the new SEC Chairperson, new CIC President and CIC board members, and fresh capital infusion into CIC.  However, a project will only be raised for approval once the CIC is formally incorporated and funding is secured.\r\rIFC promoted risk sharing facilities to support sustainable energy investments and SME financing.  Ongoing investments by local banks under IFC’s Sustainable Energy Facility (SEF) advisory program.",
          "status": "001",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003212",
              "children": [
                {
                  "type": "indicator",
                  "name": "Public and private credit bureau coverage of adult population",
                  "nameview": "2.1 Public and private credit bureau coverage of adult population",
                  "number": "201",
                  "code": "IN00002343",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of new small-holder farmers receiving credit from partner banks due to WBG-supported projects and volume of credit",
                  "nameview": "2.2 Number of new small-holder farmers receiving credit from partner banks due to WBG-supported projects and volume of credit",
                  "number": "202",
                  "code": "IN00002344",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Volume of MSME loans from WBG supported banks",
                  "nameview": "2.3 Volume of MSME loans from WBG supported banks",
                  "number": "203",
                  "code": "IN00002345",
                  "comments": "Indicator 3:  Completed.  CARD SME Banking TA and BDO Risk Management TAs were completed in June 2011, both Project Completion Reports (PCRs) approved as of October 2011.  As of June 2011, CARD volume totaled US$2.4m.  BDO’s TA was geared towards new risk management practices as opposed to volume growth.  The TA has resulted in new policies and procedures to modernize BDO’s approach to model validation, stress testing and provisioning in accordance with global Basel II standards.  The project is on track as its objective to improve the legal and regulatory framework for secured transactions is being developed with the DOF.  The reform seeks to make non-real property collateral, such as trade assets like inventory and receivables, more acceptable to lenders.  This is expected to mainly benefit MSMEs who usually have trade assets, as opposed to real estate, to provide as security to lenders.  A diagnostic report was completed by the WBG secured transactions specialists.  The DOF has formed a technical working group to develop broad-based support for the proposed legal and regulatory reforms."
                },
                {
                  "type": "indicator",
                  "name": "Number of MSME loans from WBG supported banks (i.e., BDO, BPI, CARD)",
                  "nameview": "2.4 Number of MSME loans from WBG supported banks (i.e., BDO, BPI, CARD)",
                  "number": "204",
                  "code": "IN00002346",
                  "comments": "Indicator 4:  Completed for CARD – total SME loans at project end June 2011 was 627. Provision of financial assistance to lower income class LGUs through the SSLDIP is on track with about 11 subproject proposals, coming from 2nd to 6th income class LGUs and with an estimated amount of US$14.54m in the marketing pipeline."
                },
                {
                  "type": "indicator",
                  "name": "Volume of new housing finance loans",
                  "nameview": "2.5 Volume of new housing finance loans",
                  "number": "205",
                  "code": "IN00002347",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of new housing loans",
                  "nameview": "2.6 Number of new housing loans",
                  "number": "206",
                  "code": "IN00002348",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Volume of lending by Government Finance Institutions (GFI) to 2nd and 4th class LGUs",
                  "nameview": "2.7 Volume of lending by Government Finance Institutions (GFI) to 2nd and 4th class LGUs",
                  "number": "207",
                  "code": "IN00002349",
                  "comments": "Indicator 7.  Achieved.  As of November 2011, the volume of lending by GFI has increased by more than the target of 90% (through SSLDIP)."
                },
                {
                  "type": "indicator",
                  "name": "Participation of Private Financial Instituions (PFIs)in financing sub-national projects (number of loans)",
                  "nameview": "2.8 Participation of Private Financial Instituions (PFIs)in financing sub-national projects (number of loans)",
                  "number": "208",
                  "code": "IN00002350",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003212",
              "children": [
                {
                  "type": "project",
                  "name": "P066532 - Albania Development Project.",
                  "code": "GOL0003212_P066532"
                },
                {
                  "type": "project",
                  "name": "P122565 - Albania Development Project.",
                  "code": "GOL0003212_P122565"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Increased and improved delivery of infrastructure",
          "nameview": "2.3 Increased and improved delivery of infrastructure",
          "number": "203",
          "code": "GOL0003233",
          "comments": "The priority and commitment to Public-Private Partnerships (PPPs) by the Government remain despite the delays encountered in project preparation leading to the bidding of the priority PPP projects. Daang-Hari PPP Expressway was awarded to the winning bidder in December 2011. The preparation of other PPPs by Department of Public Works and Highways (DPWH) and Department of Transport and Communication (DOTC) is being undertaken.  In the case of DOTC, given the change in management, the PPP schemes and projects are being revisited. At the same time, PPPs in other sectors, such as education and health sectors, are also being prepared.  IFC and the World Bank will be supporting DPWH and DOTC in various PPP project preparation activities up to transaction advisory stage.  \r\rLevels of budget allocation for DPWH and DOTC remain historically high.  Attention has been given to strengthening integrity measures for budget planning and utilization; certain infrastructure projects approved by the previous administration have been reviewed.  Increasing capacity for transport planning at national and local will require technical assistance.  Continuing priorities are: ensuring quality and safety in national roads; improving governance in transport and roads sector; expanding the involvement of civil society in roads sector monitoring; shifting of emphasis towards asset preservation; and results orientation. \r\rThe feasibility study for the Cebu Bus Rapid Transit (BRT) project will be undertaken with grant funding from the Clean Technology Fund (CTF), consistent with the CTF Country Investment Plan. Institutional arrangements for preparation and implementation of the Cebu BRT project are being discussed by DOTC and the Cebu City Government.  A study on the institutional arrangement for BRT operations will be undertaken. \r\rThe feed-in tariffs and renewable portfolio standards under Renewable Energy Law have not yet been implemented, as the Government’s review mechanism continues.  Under Electric Power Industry Reform Act (EPIRA), the target date for retail competition and open access has been announced for 2012.\r\rIn line with the Clean Technology Fund investment plan, the renewable energy and energy efficiency programs will be prepared using the CTF preparation grant.  The electric cooperatives sector has reported positive developments such as governance initiatives, technical and financial capacity improvements, efforts to improve credit-worthiness, aggregation for undertaking of joint activities, increasing access to private financing, etc.\r\rRelevant studies that will lead to the introduction of Liquefied Natural Gas (LNG) into the power sector, such as regional market study, preliminary site assessment, and demand studies, are being undertaken.",
          "status": "026",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003233",
              "children": [
                {
                  "type": "indicator",
                  "name": "National Road System (NRS) paved length in fair condition or better",
                  "nameview": "22.1 National Road System (NRS) paved length in fair condition or better",
                  "number": "2201",
                  "code": "IN00002387",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "New customers in rural areas with access to minigrid or Renewable Energy Technology (RET) under the Rural Power Project",
                  "nameview": "22.2 New customers in rural areas with access to minigrid or Renewable Energy Technology (RET) under the Rural Power Project",
                  "number": "2202",
                  "code": "IN00002388",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of projects and total MW privatized (IFC involvement)",
                  "nameview": "22.3 Number of projects and total MW privatized (IFC involvement)",
                  "number": "2203",
                  "code": "IN00002389",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Levels of system loss for Mindanao Electrical Cooperatives (ECs) which are target for IFC Rural Electrification Project",
                  "nameview": "22.4 Levels of system loss for Mindanao Electrical Cooperatives (ECs) which are target for IFC Rural Electrification Project",
                  "number": "2204",
                  "code": "IN00002390",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Long-run IFC average Development Outcome Tracking System (DOTS) success rate for all mature power projects",
                  "nameview": "22.5 Long-run IFC average Development Outcome Tracking System (DOTS) success rate for all mature power projects",
                  "number": "2205",
                  "code": "IN00002391",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003233",
              "children": [
                {
                  "type": "project",
                  "name": "P057731 - Albania Development Project.",
                  "code": "GOL0003233_P057731"
                },
                {
                  "type": "project",
                  "name": "P066532 - Albania Development Project.",
                  "code": "GOL0003233_P066532"
                },
                {
                  "type": "project",
                  "name": "P079935 - Albania Development Project.",
                  "code": "GOL0003233_P079935"
                },
                {
                  "type": "project",
                  "name": "P087464 - Albania Development Project.",
                  "code": "GOL0003233_P087464"
                },
                {
                  "type": "project",
                  "name": "P088926 - Albania Development Project.",
                  "code": "GOL0003233_P088926"
                },
                {
                  "type": "project",
                  "name": "P089576 - Albania Development Project.",
                  "code": "GOL0003233_P089576"
                },
                {
                  "type": "project",
                  "name": "P098572 - Albania Development Project.",
                  "code": "GOL0003233_P098572"
                },
                {
                  "type": "project",
                  "name": "P106732 - Albania Development Project.",
                  "code": "GOL0003233_P106732"
                },
                {
                  "type": "project",
                  "name": "P108874 - Albania Development Project.",
                  "code": "GOL0003233_P108874"
                },
                {
                  "type": "project",
                  "name": "P108904 - Albania Development Project.",
                  "code": "GOL0003233_P108904"
                },
                {
                  "type": "project",
                  "name": "P110065 - Albania Development Project.",
                  "code": "GOL0003233_P110065"
                },
                {
                  "type": "project",
                  "name": "P111775 - Albania Development Project.",
                  "code": "GOL0003233_P111775"
                },
                {
                  "type": "project",
                  "name": "P113159 - Albania Development Project.",
                  "code": "GOL0003233_P113159"
                },
                {
                  "type": "project",
                  "name": "P113377 - Albania Development Project.",
                  "code": "GOL0003233_P113377"
                },
                {
                  "type": "project",
                  "name": "P113844 - Albania Development Project.",
                  "code": "GOL0003233_P113844"
                },
                {
                  "type": "project",
                  "name": "P114930 - Albania Development Project.",
                  "code": "GOL0003233_P114930"
                },
                {
                  "type": "project",
                  "name": "P116084 - Albania Development Project.",
                  "code": "GOL0003233_P116084"
                },
                {
                  "type": "project",
                  "name": "P116137 - Albania Development Project.",
                  "code": "GOL0003233_P116137"
                },
                {
                  "type": "project",
                  "name": "P118253 - Albania Development Project.",
                  "code": "GOL0003233_P118253"
                },
                {
                  "type": "project",
                  "name": "P119343 - Albania Development Project.",
                  "code": "GOL0003233_P119343"
                },
                {
                  "type": "project",
                  "name": "P120309 - Albania Development Project.",
                  "code": "GOL0003233_P120309"
                },
                {
                  "type": "project",
                  "name": "P120469 - Albania Development Project.",
                  "code": "GOL0003233_P120469"
                },
                {
                  "type": "project",
                  "name": "P120492 - Albania Development Project.",
                  "code": "GOL0003233_P120492"
                },
                {
                  "type": "project",
                  "name": "P122565 - Albania Development Project.",
                  "code": "GOL0003233_P122565"
                },
                {
                  "type": "project",
                  "name": "P123385 - Albania Development Project.",
                  "code": "GOL0003233_P123385"
                },
                {
                  "type": "project",
                  "name": "P123866 - Albania Development Project.",
                  "code": "GOL0003233_P123866"
                },
                {
                  "type": "project",
                  "name": "P123930 - Albania Development Project.",
                  "code": "GOL0003233_P123930"
                },
                {
                  "type": "project",
                  "name": "P125064 - Albania Development Project.",
                  "code": "GOL0003233_P125064"
                },
                {
                  "type": "project",
                  "name": "P125919 - Albania Development Project.",
                  "code": "GOL0003233_P125919"
                },
                {
                  "type": "project",
                  "name": "P126116 - Albania Development Project.",
                  "code": "GOL0003233_P126116"
                },
                {
                  "type": "project",
                  "name": "P131333 - Albania Development Project.",
                  "code": "GOL0003233_P131333"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Enhanced regulatory policy frameworks and institutional capacity for investment,  service delivery, and trade",
          "nameview": "2.4 Enhanced regulatory policy frameworks and institutional capacity for investment,  service delivery, and trade",
          "number": "204",
          "code": "GOL0003234",
          "comments": "By virtue of Executive Order No. 8, the PPP center (attached to NEDA) has assumed its key functions for providing PPP policy recommendations, project development and preparation, monitoring, project facilitation and assistance to implementing agencies. Guidelines for the Project Development and Monitoring Fund (PDMF), created under EO 8, are in effect, and has a current funding of P300 million from the GOP budget and a US$6 million contribution from Australia.\r\rBank support will be through TA to the Energy Regulatory Commission (ERC), and Philippine Electricity Market Corporation (PEMC) in relation to implementation of RE law. Daang-Hari PPP Expressway was awarded to the winning bidder in December 2011. TA on Model for the Monitoring and Evaluation of Agricultural Policies (MEAP) has been completed.  New TAs under preparation include PPP Program for Irrigation, and AusAID-funded TA for Governance Reforms Supporting Frontline Agricultural Services and Investments Delivery under the Second Mindanao Rural Development Program (MRDP2).  Completed Studies include PPP and Value Chain Associations, and Infrastructure and Supply Chain Logistics for Enhancing Productivity and Agribusiness Growth in the Philippines. \r\rIFC targeted two PPP pilots, of which one has been signed (Metro Clark water).  The second, Light Rail Transit 1, is yet to be decided.  Another PPP mandate, not targeted previously, was signed (NAIA Expressway).\r\rThe TA to provide technical inputs for the updating of the Agriculture and Fisheries and Modernization Plan relating to reforms in food policy (National Food Authority) and new approaches in supporting agricultural growth through investment in agribusiness (e.g., PPP) has been completed.\r\rFinalized the draft TA report on Development of a Sustainable Rural Development Framework under a Convergence Strategy – technical inputs for the GOP’s strategic and institutional reforms for the RD agencies.",
          "status": "026",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003234",
              "children": [
                {
                  "type": "indicator",
                  "name": "PPP/BOTs (Public Private Partnership/ Build Operate Transfer) in (i) national infrastructure; (ii) local infrastructure",
                  "nameview": "23.1 PPP/BOTs (Public Private Partnership/ Build Operate Transfer) in (i) national infrastructure; (ii) local infrastructure",
                  "number": "2301",
                  "code": "IN00002392",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Commercial banks providing loans to Electrical Cooperatives (EC)",
                  "nameview": "23.2 Commercial banks providing loans to Electrical Cooperatives (EC)",
                  "number": "2302",
                  "code": "IN00002393",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of clustered subtransmission facilities for supply to Electrical Cooperatives (ECs)",
                  "nameview": "23.3 Number of clustered subtransmission facilities for supply to Electrical Cooperatives (ECs)",
                  "number": "2303",
                  "code": "IN00002394",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Business process is simplified and business regulations are consistently applied: business entry reform at the sub-national level: number of cities",
                  "nameview": "23.4 Business process is simplified and business regulations are consistently applied: business entry reform at the sub-national level: number of cities",
                  "number": "2304",
                  "code": "IN00002395",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003234",
              "children": [
                {
                  "type": "project",
                  "name": "P066397 - Albania Development Project.",
                  "code": "GOL0003234_P066397"
                },
                {
                  "type": "project",
                  "name": "P066532 - Albania Development Project.",
                  "code": "GOL0003234_P066532"
                },
                {
                  "type": "project",
                  "name": "P089082 - Albania Development Project.",
                  "code": "GOL0003234_P089082"
                },
                {
                  "type": "project",
                  "name": "P109947 - Albania Development Project.",
                  "code": "GOL0003234_P109947"
                },
                {
                  "type": "project",
                  "name": "P110065 - Albania Development Project.",
                  "code": "GOL0003234_P110065"
                },
                {
                  "type": "project",
                  "name": "P113377 - Albania Development Project.",
                  "code": "GOL0003234_P113377"
                },
                {
                  "type": "project",
                  "name": "P114930 - Albania Development Project.",
                  "code": "GOL0003234_P114930"
                },
                {
                  "type": "project",
                  "name": "P115111 - Albania Development Project.",
                  "code": "GOL0003234_P115111"
                },
                {
                  "type": "project",
                  "name": "P117602 - Albania Development Project.",
                  "code": "GOL0003234_P117602"
                },
                {
                  "type": "project",
                  "name": "P117724 - Albania Development Project.",
                  "code": "GOL0003234_P117724"
                },
                {
                  "type": "project",
                  "name": "P117925 - Albania Development Project.",
                  "code": "GOL0003234_P117925"
                },
                {
                  "type": "project",
                  "name": "P123564 - Albania Development Project.",
                  "code": "GOL0003234_P123564"
                },
                {
                  "type": "project",
                  "name": "P123636 - Albania Development Project.",
                  "code": "GOL0003234_P123636"
                },
                {
                  "type": "project",
                  "name": "P125505 - Albania Development Project.",
                  "code": "GOL0003234_P125505"
                },
                {
                  "type": "project",
                  "name": "P127147 - Albania Development Project.",
                  "code": "GOL0003234_P127147"
                },
                {
                  "type": "project",
                  "name": "P131333 - Albania Development Project.",
                  "code": "GOL0003234_P131333"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "pillar",
      "name": "Strategic Objective 3: Better Public Service Delivery",
      "nameview": "3. Strategic Objective 3: Better Public Service Delivery",
      "number": "3",
      "code": "CAT0024439",
      "comments": "",
      "children": [
        {
          "type": "outcome",
          "name": "Improved access to quality basic education services",
          "nameview": "3.1 Improved access to quality basic education services",
          "number": "301",
          "code": "GOL0003214",
          "comments": "The Department of Education (DepED) has issued policies and expanded the implementation of programs in support of the Basic Education Sector Reform Program Agenda (BESRA).  Efforts were also focused to provide critical resources to the neediest schools. The National Competency Based Standards for Teachers (NCBTS), which provides a single framework defining the different dimensions of effective teaching, was developed and applied to inform the hiring, promotion, training and supervision of teachers.  The standards are also the basis for hiring and recruitment of teachers by Local Chief Executives.  In line with its Kindergarten to 12 program (to expand the basic education cycle from 10 to 12 years in line with international benchmarks), DepED has initiated the Universal Kindergarten program and started the review of the curriculum, and developed the curriculum framework, standards and competencies for all grade levels in all learning areas.\r\rImprovements in the key performance indicators compared to the previous year in terms of enrolment, completion and achievement demonstrate the impact of efforts in education undertaken by the Government to:  (i) improve institutional arrangements to support effective delivery; (ii) expand implementation of school-based management as evidenced by an increase in the number of schools with school improvement plans, school governing councils and school report cards; (iii) more extensive use of data to inform resource allocation and deployment, including in the updating of DepED’s Medium-Term Expenditure Framework; and (iv) affirmative action to target low-resourced areas to address shortages of critical inputs, and provide more financial resources to enable schools to flexibly respond to needs.  DepED has developed an equity-based formula for school Maintenance and Other Operating Expenses (MOOE) allocation, with higher priority given to poorly-resourced schools or schools in poor areas.  This formula was partially applied in this year’s DepED budget, with 40 of the 200 school divisions identified as priority areas for allocation of critical inputs such as classrooms, seats, textbooks and teachers.  School MOOE is now being provided directly to schools and the allocation per school is uploaded in the DepED website.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003214",
              "children": [
                {
                  "type": "indicator",
                  "name": "Net primary enrolment rate",
                  "nameview": "3.1 Net primary enrolment rate",
                  "number": "301",
                  "code": "IN00002351",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Primary completion rate",
                  "nameview": "3.2 Primary completion rate",
                  "number": "302",
                  "code": "IN00002352",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Net secondary enrolment rate",
                  "nameview": "3.3 Net secondary enrolment rate",
                  "number": "303",
                  "code": "IN00002353",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Secondary completion rate",
                  "nameview": "3.4 Secondary completion rate",
                  "number": "304",
                  "code": "IN00002354",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003214",
              "children": [
                {
                  "type": "project",
                  "name": "P115229 - Albania Development Project.",
                  "code": "GOL0003214_P115229"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Improved access to health services",
          "nameview": "3.2 Improved access to health services",
          "number": "302",
          "code": "GOL0003215",
          "comments": "Performance-based financing and monitoring have been established for all provinces. All NHTS-PR identified poor are enrolled in PhilHealth. However, LGU performance and accomplishments need to be validated, and provision of elements of access to quality health services needs to be ensured.",
          "status": "001",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003215",
              "children": [
                {
                  "type": "indicator",
                  "name": "(i) Children (age 1) immunized with DPT3 (Diphtheria- Pertussis- Tetanus Third Dose) (i) nationally",
                  "nameview": "4.1 (i) Children (age 1) immunized with DPT3 (Diphtheria- Pertussis- Tetanus Third Dose) (i) nationally",
                  "number": "401",
                  "code": "IN00002355",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "(ii) Children (age 1) immunized with DTP3 (Diphtheria - Pertusis- Tetanus Third Dose) (ii) poorest quintile",
                  "nameview": "4.2 (ii) Children (age 1) immunized with DTP3 (Diphtheria - Pertusis- Tetanus Third Dose) (ii) poorest quintile",
                  "number": "402",
                  "code": "IN00002356",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "(i) Share of facility deliveries (i) nationally",
                  "nameview": "4.3 (i) Share of facility deliveries (i) nationally",
                  "number": "403",
                  "code": "IN00002357",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "(ii) Share of facility deliveries (ii) poorest quintile of women",
                  "nameview": "4.4 (ii) Share of facility deliveries (ii) poorest quintile of women",
                  "number": "404",
                  "code": "IN00002358",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "(i) Enrolment coverage of the National Health Insurance Program (i) total population",
                  "nameview": "4.5 (i) Enrolment coverage of the National Health Insurance Program (i) total population",
                  "number": "405",
                  "code": "IN00002359",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "(ii) Enrolment coverage of the National Health Insurance Program (ii) indigent population",
                  "nameview": "4.6 (ii) Enrolment coverage of the National Health Insurance Program (ii) indigent population",
                  "number": "406",
                  "code": "IN00002360",
                  "comments": ""
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Increased household access to safe drinking water and sanitation services",
          "nameview": "3.3 Increased household access to safe drinking water and sanitation services",
          "number": "303",
          "code": "GOL0003216",
          "comments": "Continued increase in access to safe drinking water. Bank contributions to increase HH access to safe drinking water and sanitation were mainly from the completed sub-projects under the GPOBA, UPSURGE, SSLDIP, MTSP, LISCOP and the Water and Sanitation Program (WSP) projects – ESWIF-2 and SuSEA Philippines, from January to June 2011.\r\rIt is expected that access will further increase under the GPOBA grant to connect poor households, LISCOP additional financing, and the completion of the ongoing MTSP sub-projects for Metro Manila, and the completion of WSS sub-projects under UPSURGE and SSLDIP.  WSP is now proceeding with project preparation for small wastewater infrastructure in three LGUs outside Metro Manila and the selection of 20 small water utilities for regulation and performance improvement.  Three Sanitary landfill subprojects are being assessed by LBP for financing under the SSLDIP.  The SSLDIP is also financing 13 water supply subprojects of lower income class municipalities (3rd to 5th).  Twelve are already completed benefiting 12,479 households.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003216",
              "children": [
                {
                  "type": "indicator",
                  "name": "Share of poor households in project areas with access to safe drinking water services (MDG)/ connected to network services",
                  "nameview": "5.1 Share of poor households in project areas with access to safe drinking water services (MDG)/ connected to network services",
                  "number": "501",
                  "code": "IN00002361",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Share of poor households in project areas with access to improved sanitation (MDG)",
                  "nameview": "5.2 Share of poor households in project areas with access to improved sanitation (MDG)",
                  "number": "502",
                  "code": "IN00002362",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of LGUs closing open dumpsites and opening sanitary landfills (Solid Waste Management Act)",
                  "nameview": "5.3 Number of LGUs closing open dumpsites and opening sanitary landfills (Solid Waste Management Act)",
                  "number": "503",
                  "code": "IN00002363",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003216",
              "children": [
                {
                  "type": "project",
                  "name": "P089082 - Albania Development Project.",
                  "code": "GOL0003216_P089082"
                },
                {
                  "type": "project",
                  "name": "P116084 - Albania Development Project.",
                  "code": "GOL0003216_P116084"
                },
                {
                  "type": "project",
                  "name": "P120469 - Albania Development Project.",
                  "code": "GOL0003216_P120469"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Scaled-up provision of basic services through a nationwide community-driven development program",
          "nameview": "3.4 Scaled-up provision of basic services through a nationwide community-driven development program",
          "number": "304",
          "code": "GOL0003217",
          "comments": "The KALAHI-CIDSS Additional Financing (US$59m) is now rolling out in parallel with the US$20 million in funding from the Millenium Challenge Corporation, which is being implemented under a common operational framework.  While the current coverage of 214 is below the 2011 target, it is expected that DSWD will be able to catch up through 2012.\r\rAn Impact Evaluation of KALAHI-CIDSS was finalized in November 2011, demonstrating positive impacts on consumption, labor force participation and access to basic services.\r\rBuilding on the success of KALAHI-CIDSS, a preparation mission for a National CDD Program (NCDDP) was conducted in October 2011.  A Project Concept Note is due for review in December 2011 or January 2012.  The project could expand CDD coverage to as many as 965 municipalities across the country.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003217",
              "children": [
                {
                  "type": "indicator",
                  "name": "Number of poor municipalities supported by national Community Driven Development (CDD) program",
                  "nameview": "6.1 Number of poor municipalities supported by national Community Driven Development (CDD) program",
                  "number": "601",
                  "code": "IN00002364",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003217",
              "children": [
                {
                  "type": "project",
                  "name": "P108874 - Albania Development Project.",
                  "code": "GOL0003217_P108874"
                },
                {
                  "type": "project",
                  "name": "P122565 - Albania Development Project.",
                  "code": "GOL0003217_P122565"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Enhanced effectiveness of public service delivery through more coordinated area-based approaches",
          "nameview": "3.5 Enhanced effectiveness of public service delivery through more coordinated area-based approaches",
          "number": "305",
          "code": "GOL0003218",
          "comments": "The Bank has been supporting multiple government agendas for convergence of service delivery, in line with the objective of this Outcome.  This includes support for convergence of DSWD’s three main anti-poverty programs (KALAHI-CIDSS, the Pantawid Pamilya Conditional Cash Transfer Program, and the SEA-K livelihoods program.  Technical assistance for convergence of the three rural development agencies (DA, DAR and DENR) has also been provided.\r\rHowever, specific action to achieve this Outcome in a geographic location is off track.",
          "status": "010",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003218",
              "children": [
                {
                  "type": "indicator",
                  "name": "Number of poorer provinces with enhanced mechanism to coordinate inter-agency anti-poverty programs",
                  "nameview": "7.1 Number of poorer provinces with enhanced mechanism to coordinate inter-agency anti-poverty programs",
                  "number": "701",
                  "code": "IN00002365",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003218",
              "children": [
                {
                  "type": "project",
                  "name": "P108874 - Albania Development Project.",
                  "code": "GOL0003218_P108874"
                },
                {
                  "type": "project",
                  "name": "P116084 - Albania Development Project.",
                  "code": "GOL0003218_P116084"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "pillar",
      "name": "Strategic Objective 4: Reduced Vulnerabilities",
      "nameview": "4. Strategic Objective 4: Reduced Vulnerabilities",
      "number": "4",
      "code": "CAT0024440",
      "comments": "",
      "children": [
        {
          "type": "outcome",
          "name": "National household poverty targeting system in place and used",
          "nameview": "4.1 National household poverty targeting system in place and used",
          "number": "401",
          "code": "GOL0003219",
          "comments": "As of July 2011, the National Household Targeting System for Poverty Reduction (NHTS-PR) has completed surveying 10.9 million households, of which 5.2 million households were identified as poor via the Proxy Means Test (PMT).  The NHTS-PR has been adopted as the mechanism for selecting beneficiaries of social protection programs nationwide (Executive Order No. 867 issued on March 9, 2010), and the database was officially launched nationwide on October 3, 2011.\r\rAs of September 2011, 2.2 million households out of 5.2 million poor households identified by the NHTS-PR receive benefits under the Pantawid Pamilyang program (Conditional Cash Transfer).\r\rThe NHTS-PR has been utilized to select beneficiaries for four programs, which are the Pantawid Pamilyang Program (Conditional Cash Transfer), the Philhealth Indigent Program (PhilHealth), the Social Pension for Indigent Senior Citizens, and the National Residential Lightening Program.  In addition, the NHTS-PR database has been shared with 32 institutions among LGUs, NGOs, and legislative branches.\r\rThe reassessment of the NHTS-PR is scheduled in 2013/14.  Lessons learnt from the first round of implementation of poverty targeting will be incorporated as well as the new poverty lines.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003219",
              "children": [
                {
                  "type": "indicator",
                  "name": "Share of poor households registered in the database receiving benefits of social programs",
                  "nameview": "8.1 Share of poor households registered in the database receiving benefits of social programs",
                  "number": "801",
                  "code": "IN00002366",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of national programs that are using the targeting system for selecting their beneficiaries",
                  "nameview": "8.2 Number of national programs that are using the targeting system for selecting their beneficiaries",
                  "number": "802",
                  "code": "IN00002367",
                  "comments": ""
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Conditional Cash Transfer (CCT) program fully operational",
          "nameview": "4.2 Conditional Cash Transfer (CCT) program fully operational",
          "number": "402",
          "code": "GOL0003220",
          "comments": "Pantawid Pamilyang program (CCT program) has rapidly expanded and now become one of the core social protection programs in the Philippines.  As of July 2011, the program covers 2.2 million beneficiary households. (339,790 households in Set 1, 289,215 households in Set 2, 417,523 households in Set 3, and 1,183,493 households in Set 4).\r\rBesides the program expansion, the DSWD (the implementing Department) has made certain changes in program design and implementation in 2011 such as increasing payment frequency and introducing alternative payment methods.\r\rResponding to the request from DOF, the current SWDRP has started covering Set 2 under the current loan while preparing additional financing.  Regular spot checks have been implemented since November 2010, and the data collection of the Quantitative Impact Evaluation started in October 2011.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003220",
              "children": [
                {
                  "type": "indicator",
                  "name": "Share of 4Ps (Pantawid Pamilyang Pilipino Program # CCT program) beneficiaries belonging to the two poorest quintiles",
                  "nameview": "9.1 Share of 4Ps (Pantawid Pamilyang Pilipino Program # CCT program) beneficiaries belonging to the two poorest quintiles",
                  "number": "901",
                  "code": "IN00002368",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Share of the 4Ps grants transferred to the beneficiaries that are based on conditionalities met for health (0-14 years old and/or pregnant women) and education (6-14 years old)",
                  "nameview": "9.2 Share of the 4Ps grants transferred to the beneficiaries that are based on conditionalities met for health (0-14 years old and/or pregnant women) and education (6-14 years old)",
                  "number": "902",
                  "code": "IN00002369",
                  "comments": ""
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Disaster- and climate change-related risks reduced",
          "nameview": "4.3 Disaster- and climate change-related risks reduced",
          "number": "403",
          "code": "GOL0003221",
          "comments": "The enabling laws on Climate Change and DRRM have already been passed with the IRR and the strategy framework and the national action plan of the former.  However, capacities of the new agencies created under these laws have yet to be built up and thus implementation would pose a real challenge.  In addition, coordination of the agencies needs to be significantly improved and delineation of functions and responsibilities clarified.  A Memorandum of Agreement has been signed between the Climate Change Commission and National Disaster Risk Reduction and Management Council to harmonize the localization of action plans for both CC and DRRM at the local level.  \r\rThe Philippine Climate Change Adaptation Project that focuses on agriculture and NRM sectors was approved by the Board. Some irrigation systems to be rehabilitated under the Participatory Irrigation Development Project are also redesigned and/or retrofitted to make them more climate resilient following the typhoons and the great flooding that affected the country in 2009.\r\rThe formulation of a comprehensive flood management master plan for Metro Manila is underway.  The results will pave the way for a broader plan to improve the urban resilience of the capital in light of the massive flooding in 2009.  The master plan is targeted for completion in December 2011; a possible investment plan will be confirmed with the Government in the programming discussions in November/December.\r\rThe Board approved the Disaster Risk Management Development Policy Loan with a Catastrophe Deferred Drawdown Option (CAT-DDO) in September 2011, which was one recommendation of the risk finance strategy prepared by the World Bank with GFDRR support.  Effectiveness is pending.\r\rIn addition, a new project on climate adaptation in the agriculture and fishery sectors in the central Philippines (the Central Philippines Rural Development Project), considered the most vulnerable regions of the country from climate-related extreme weather events and rise in sea level, is being proposed by the Department of Agriculture.  This is planned for FY13/FY14 delivery.",
          "status": "001",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003221",
              "children": [
                {
                  "type": "indicator",
                  "name": "Share of vulnerable Local Government Units (LGUs) that integrate Disaster Risk Reduction (DRR) and/or Climate Change Adaptation (CCA) into their local plans and budgets",
                  "nameview": "10.1 Share of vulnerable Local Government Units (LGUs) that integrate Disaster Risk Reduction (DRR) and/or Climate Change Adaptation (CCA) into their local plans and budgets",
                  "number": "1001",
                  "code": "IN00002370",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Volume of investments in Disaster Risk Reduction and/or Climate Change Adaptation measures in participating Local Government Units (LGUs)",
                  "nameview": "10.2 Volume of investments in Disaster Risk Reduction and/or Climate Change Adaptation measures in participating Local Government Units (LGUs)",
                  "number": "1002",
                  "code": "IN00002371",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Number of WBG projects that incorporate Disaster Risk Reduction, Climate Change Adaptation, and/or contingent components",
                  "nameview": "10.3 Number of WBG projects that incorporate Disaster Risk Reduction, Climate Change Adaptation, and/or contingent components",
                  "number": "1003",
                  "code": "IN00002372",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003221",
              "children": [
                {
                  "type": "project",
                  "name": "P131333 - Albania Development Project.",
                  "code": "GOL0003221_P131333"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Greenhouse gas emissions reduced through expansion of mitigation programs in key sectors and LGUs",
          "nameview": "4.4 Greenhouse gas emissions reduced through expansion of mitigation programs in key sectors and LGUs",
          "number": "404",
          "code": "GOL0003222",
          "comments": "Three additional emission reduction purchase agreements (ERPAs) have been signed by the Bank in addition to the baseline/pre-CAS ERPAs with a total emission reduction volume of 2.603 million tons C02. This does not yet include the expansion of the programmatic Methane Reduction Programs with Land Bank of the Philippines on pig waste and landfill projects, respectively. In addition, the scheduled deliveries of the Renewable Energy Program (formerly the \rSecond Rural Power Project) in FY12 and the Cebu Bus Rapid Transit in FY13 are also expected to contribute significantly to emission reductions through the implementation of renewable energy subprojects and sustainable transport projects.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003222",
              "children": [
                {
                  "type": "indicator",
                  "name": "Volume of Bank-assisted Emission Reductions Purchase Agreements (ERPAs)",
                  "nameview": "11.1 Volume of Bank-assisted Emission Reductions Purchase Agreements (ERPAs)",
                  "number": "1101",
                  "code": "IN00002373",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003222",
              "children": [
                {
                  "type": "project",
                  "name": "P004406 - Albania Development Project.",
                  "code": "GOL0003222_P004406"
                },
                {
                  "type": "project",
                  "name": "P066532 - Albania Development Project.",
                  "code": "GOL0003222_P066532"
                },
                {
                  "type": "project",
                  "name": "P087464 - Albania Development Project.",
                  "code": "GOL0003222_P087464"
                },
                {
                  "type": "project",
                  "name": "P089576 - Albania Development Project.",
                  "code": "GOL0003222_P089576"
                },
                {
                  "type": "project",
                  "name": "P098572 - Albania Development Project.",
                  "code": "GOL0003222_P098572"
                },
                {
                  "type": "project",
                  "name": "P106732 - Albania Development Project.",
                  "code": "GOL0003222_P106732"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Enhanced impact and conflict-sensitivity of development programs implemented in communities in Mindanao affected by armed or violent conflict",
          "nameview": "4.5 Enhanced impact and conflict-sensitivity of development programs implemented in communities in Mindanao affected by armed or violent conflict",
          "number": "405",
          "code": "GOL0003223",
          "comments": "Implementation of the Community- Driven Reconstruction (CDR) sub-component of the Mindanao Trust Fund-Reconstruction & Development Program started 11/2010.  At least 1,000 IDP families are expected to benefit from infrastructure, housing and livelihood assistance.  At present XXX families have been covered by CDR activities.\r\rA comprehensive IDP assessment is being undertaken in partnership with World Food Program under the State and Peace-building Fund.  This has significantly informed the UN’s Humanitarian Action Plan for Mindanao for 2011-2012.\r\rConflict-sensitive programming and implementation have been introduced to both Mindanao Trust Fund-Reconstruction & Development Program and ARMM Social Fund Project.  Tools are being developed and will be used in the field operations.  Conflict mitigation impacts will be strengthened through the remainder of the CAS period by strengthening the focus on livelihoods and conflict management.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003223",
              "children": [
                {
                  "type": "indicator",
                  "name": "Number of IDP (Internally Displaced Persons) families from recent conflict with homes rebuilt",
                  "nameview": "12.1 Number of IDP (Internally Displaced Persons) families from recent conflict with homes rebuilt",
                  "number": "1201",
                  "code": "IN00002374",
                  "comments": ""
                },
                {
                  "type": "indicator",
                  "name": "Development and use of simple and user friendly conflict sensitivity tool for assessment of more programs in Mindanao",
                  "nameview": "12.2 Development and use of simple and user friendly conflict sensitivity tool for assessment of more programs in Mindanao",
                  "number": "1202",
                  "code": "IN00002375",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003223",
              "children": [
                {
                  "type": "project",
                  "name": "P110065 - Albania Development Project.",
                  "code": "GOL0003223_P110065"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Scaled up provision of basic services and livelihood support through CDD in communities affected by armed or violent conflict",
          "nameview": "4.6 Scaled up provision of basic services and livelihood support through CDD in communities affected by armed or violent conflict",
          "number": "406",
          "code": "GOL0003224",
          "comments": "ASFP additional financing which will involve CDD implementation in 597 conflict-affected communities became effective in 11/2010. Social preparation is ongoing in over 100 villages, with sub-project implementation to commence in earnest over the next 1-2 months. During 2011, the MTF-RDP has expanded to over 100 sites [9/2011]. Block grants are being provided to 24 municipalities under the ASFP (eight per year) based on good governance indicators to strengthen transparency in budgeting, allocation, and management of public resources and accountability.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003224",
              "children": [
                {
                  "type": "indicator",
                  "name": "Number of conflict- affected communities having one or more CDD sub-projects",
                  "nameview": "13.1 Number of conflict- affected communities having one or more CDD sub-projects",
                  "number": "1301",
                  "code": "IN00002376",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003224",
              "children": [
                {
                  "type": "project",
                  "name": "P110065 - Albania Development Project.",
                  "code": "GOL0003224_P110065"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "pillar",
      "name": "Strategic Objective 5 (Cross-Cutting Theme): Good Governance",
      "nameview": "5. Strategic Objective 5 (Cross-Cutting Theme): Good Governance",
      "number": "5",
      "code": "CAT0024441",
      "comments": "",
      "children": [
        {
          "type": "outcome",
          "name": "Core business systems, processes and capacities in selected agencies improved",
          "nameview": "5.1 Core business systems, processes and capacities in selected agencies improved",
          "number": "501",
          "code": "GOL0003225",
          "comments": "Support for GAC at the agency level is proceeding in the following agencies:\r•\tDSWD:  GAC in the CCT completed, including agency-wide Integrity Development Review\r•\tDepEd:  The Political Economy Assessment in education was completed in June/July 2010. PE Assessment focused on three programs: teacher deployment, voucher program, SBM grant and School MOOE distribution.  The PE findings significantly helped the policy dialogue with the Government especially the new DepED management, as they appreciated the evidence-based findings and practical recommendations set forth in the PE assessment.  Many recommendations led to the revisiting of pertinent policies in government, which eventually led to a revised policy or a revision of the roles and responsibilities of different actors in the education sector (e.g., Division Superintendents).  It supported a meaningful dialogue with the Government around complex and sensitive PE issues.  In relation to the NPSBE 2 PCN, this assisted the Bank in getting an overview of the risks and challenges that will affect the design of the new operation.  By knowing the challenges and being guided well through the solid and valuable recommendations, the team was guided in terms of selecting the project components which will help address the challenges (more accountability initiatives, review of policies in terms of deployment of resources) or in terms of coming up with mitigation measures to address the identified risks. The Internal Audit Unit of DepED was created in 2009, and staffing including the Director was completed as of last year.\r•\tDOH has already created, trained staff and instituted in 2010 an Internal Audit Unit that reports directly to the Secretary of Health.\r•\tPost-Ondoy and Pepeng Reconstruction:  Developed a system to track on and off-budget expenditures and physical progress of reconstruction efforts.\r•\tSupreme Court:  Enterprise Information Systems Plan refocuses on modernizing judiciary-wide information systems and associated human resource capacity and supports MIS Office re-engineering and development plan.\r•\tBIR:  Gap analysis of the internal audit function of BIR completed.  Follow-up mission planned.\r•\tIDF Grant on Anti-corruption:  A new Discipline Office under the Office of the Deputy Executive Secretary for Legal Affairs (ODESLA) of the Office of the President has been created to handle the integrity requirement of the offices under the executive branch.  The Discipline Office of ODESLA implements the IDF Grant with the following activity:  (i) improve and make effective the integrity development action plan (IDAP) in each agency; (ii) pilot test the improved IDAP in selected agencies; and (iii) monitor and evaluate the integrity action plans in each agency.  The TOR has been cleared by the Bank and a selection process is underway.  The contract is expected to start implementation by January 2012. The IDF Grant closing date will be extended by 18 months to complete its development objectives.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003225",
              "children": [
                {
                  "type": "indicator",
                  "name": "Number of national government agencies with a functioning internal audit unit out of 22 national agencies",
                  "nameview": "14.1 Number of national government agencies with a functioning internal audit unit out of 22 national agencies",
                  "number": "1401",
                  "code": "IN00002377",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003225",
              "children": [
                {
                  "type": "project",
                  "name": "P115111 - Albania Development Project.",
                  "code": "GOL0003225_P115111"
                },
                {
                  "type": "project",
                  "name": "P118527 - Albania Development Project.",
                  "code": "GOL0003225_P118527"
                },
                {
                  "type": "project",
                  "name": "P120309 - Albania Development Project.",
                  "code": "GOL0003225_P120309"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "The Procurement Law more strictly enforced",
          "nameview": "5.2 The Procurement Law more strictly enforced",
          "number": "502",
          "code": "GOL0003226",
          "comments": "The Harmonized Philippine Bidding Documents for Works & Goods were issued in December 2011 and posted on website www.gppb.gov.ph. COA issued the Procurement Audit Guide in January 2010.  Construction Sector Initiative published Material Project Information for 10 pilot projects in the Philippine Government Electronic Procurement Systems (PhilGEPS). Monitoring of procurement performance and collection of statistics developed and started in three agencies.\r\rProcurement Reform:\r•\tGPPB, with JSDF funding, completed the draft LGU Generic Procurement Manual, Community Based Procurement Manual and the CSO Observers Manual.  Piloting in 12 LGUs will start January 2012 to replicate the Harmonized Philippine Bidding Documents for Works & Goods issued in December 2010 at local level.\r•\tGPPB is currently leading the pilot testing of the Agency Procurement Compliance and Performance Indicator (APCPI) system for 2010 data in 15 entities comprising national, government corporation, and local government units.  Issuance will be by middle of 2012.\r•\tConstruction Sector Initiative covered study on three live projects funded by NRIMP2.  In addition, 10 completed projects were posted in 2010 in PhilGEPS’ MPI (Material Project Information menu)\r•\tA new IDF Grant will provide financial resources for:  (i) APCPI on-line reporting in the GPPB website; (ii) enhancement in the procurement audit program by Commission on Audit; and (iii) the professionalization of procurement practitioners.\r•\tAn updating process for the 2008 CPAR is underway, with ADB funding, and led by GPPB.  World Bank and other development partners, including private sector and CSOs are collaborating in the assessment process.\r•\tThe IDF Grant supporting (PhilGEPS) was closed in June 2011.  Implementation of PhilGEPS Phase 2-5 (charges and fees, e-payment and e-bid submission) has not progressed as expected due to technical difficulties.  Full implementation is expected to commence before end of 2011.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003226",
              "children": [
                {
                  "type": "indicator",
                  "name": "Procurement operations and public procurement market (Country Procurement Assessment Report - CPAR scores)",
                  "nameview": "15.1 Procurement operations and public procurement market (Country Procurement Assessment Report - CPAR scores)",
                  "number": "1501",
                  "code": "IN00002378",
                  "comments": ""
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Improved management and greater transparency in public finances",
          "nameview": "5.3 Improved management and greater transparency in public finances",
          "number": "503",
          "code": "GOL0003227",
          "comments": "The Government issued Executive Order No. 55 in September 2011 which formally enunciated the policy to adopt and implement the PFM Reform Roadmap.  The EO instructed all national government agencies to support and collaborate with the PFM Reform Committee in establishing PFM systems by 2016.  Some short-term measures have been initiated by the PFM Committee:  i.e., design/revision of reporting requirements, revision of PFM manual, centralized payroll system, and maintenance of Government Human Resources Information System.  The Bank has been providing technical assistance to the PFM Committee through expert advice and learning events to help the Government implement its action plan on PFM reform in such areas as chart of accounts, budget classification structure, FMIS project development and treasury single account.\r\rThe Government is appropriating nearly Php1 billion in its 2012 national budget for the needed investments in its FMIS.\r\rIDF Grant on Strengthening the Capacity and Effectiveness of the Commission on Audit: This project is expected to support and complement the Government’s PFM reform agenda by focusing on the role of public audit in promoting increased accountability and transparency and improving capacity in the overall governance framework. This involves the development and adoption of a results-based integrated audit methodology that will focus on the outputs and outcomes of public expenditures, using a risk-based audit approach.  To date, the project has been completed with:  (i) Integrated Results- and Risk-Based Audit Manual (IRRBAM) and Forensic Audit Manual (FoAM) finalized; (ii) trainings completed on 870 (for IRRBAM) and 723 (for Forensic Audit) COA personnel; and (iii) pilot audits conducted using the integrated results- and risk-based approach to five selected agencies. (Achieved)",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003227",
              "children": [
                {
                  "type": "indicator",
                  "name": "Public Expenditures and Financial Accountability (PEFA) scores (i) Predictability and Control in Budget Execution; (ii) Accounting,Recording and Reporting",
                  "nameview": "16.1 Public Expenditures and Financial Accountability (PEFA) scores (i) Predictability and Control in Budget Execution; (ii) Accounting,Recording and Reporting",
                  "number": "1601",
                  "code": "IN00002379",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003227",
              "children": [
                {
                  "type": "project",
                  "name": "P125919 - Albania Development Project.",
                  "code": "GOL0003227_P125919"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Deepened and refined decentralization through broad-based reforms",
          "nameview": "5.4 Deepened and refined decentralization through broad-based reforms",
          "number": "504",
          "code": "GOL0003228",
          "comments": "There has been no progress to date on efforts to reform the Local Government Code of 1991.  The main legislative advocacy of the LGUs is to increase the statutory IRA appropriate from 40% to 50% of national internal revenues.  Proposed bills have been filed in support of this amendment but these are unlikely to progress in the current Congress.\r\rDILG, with support from DBM, has aggressively pursued policy reforms to improve the transparency of LGUs (via the Full Disclosure Policy) and strengthen incentives for better local governance and performance (via the Seal of Good Housekeeping and the Performance Challenge Fund).\r\rA new work-plan for 2011-12 has been finalized by the PDF-WG.  The work plan has been restructured to focus the support of development partners (led by the World Bank) on the local governance agenda of DILG.  The World Bank will implement a technical assistance and capacity-building AAA in the 2nd half of FY12 to support the Full Disclosure Policy.\r\rThe De La Salle University (DLSU) IDF activity is assessing the application of LGU scorecards as part of knowledge partnerships for local service delivery.",
          "status": "001",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003228",
              "children": [
                {
                  "type": "indicator",
                  "name": "Consensus built around revisions to key legislation affecting decentralization",
                  "nameview": "17.1 Consensus built around revisions to key legislation affecting decentralization",
                  "number": "1701",
                  "code": "IN00002380",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003228",
              "children": [
                {
                  "type": "project",
                  "name": "P117602 - Albania Development Project.",
                  "code": "GOL0003228_P117602"
                }
              ]
            }
          ]
        },
        {
          "type": "outcome",
          "name": "Strengthened LGU perfromance for more effective service delivery",
          "nameview": "5.5 Strengthened LGU perfromance for more effective service delivery",
          "number": "505",
          "code": "GOL0003229",
          "comments": "DILG implemented the LGU Performance Challenge Fund in 2011, which provided low-income class LGUs that attained the Seal of Good Housekeeping with access to matching capital grants for local investments that are consistent with national government priorities. T World Bank is providing technical assistance to DILG to strengthen both programs through the AusAID TF-supported AAA on Institutionalizing Incentives for LGUs.\r\rDILG is moving forward to advocate for the expansion of incentives for local governance and performance in the financial assistance programs of line agencies for LGUs.  The World Bank is supporting this advocacy by facilitating DILG’s engagement in the project preparation of several pipeline operations (e.g., Secondary & Local Roads Project, NCDDP, Manila Bay IWQM, RIGP).\r\rSince 2007, the DOH enters into an annual performance contract with LGUs (all LGUs in 2009) with part of the performance contract delineating variable tranche allocations that LGUs are eligible to receive.  Performance is based on their accomplishments in certain indicators in their LGU scorecards.",
          "status": "009",
          "children": [
            {
              "type": "folder",
              "name": "Indicators",
              "code": "FOLDER_GOL0003229",
              "children": [
                {
                  "type": "indicator",
                  "name": "Number of Local Government Units (LGUs) participating in perfromance-based programs",
                  "nameview": "18.1 Number of Local Government Units (LGUs) participating in perfromance-based programs",
                  "number": "1801",
                  "code": "IN00002381",
                  "comments": ""
                }
              ]
            },
            {
              "type": "folder",
              "name": "Projects",
              "code": "FOLDERPROJ_GOL0003229",
              "children": [
                {
                  "type": "project",
                  "name": "P117602 - Albania Development Project.",
                  "code": "GOL0003229_P117602"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

  private margin: any = {top: 20, right: 20, bottom: 20, left: 20};
  width = 400 - this.margin.left - this.margin.right;
 

  private chart: any;
  private height: number;
  private tree;
  //private root = this.data;

  createChart() {
    let element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;

    this.svg = d3.select(element).append('svg')
      .attr('width', 800)
      .attr('height', 1000);
      

    // chart plot area
    this.chart = this.svg.append('g')
      .attr('class', 'chart')
      .attr('transform', `translate(${this.margin.left},   ${this.margin.top})`)
  
  }



  constructor() {

  }

  ngOnInit() {
    this.createChart();
    this.root = this.data;
        //parseDataFromSAP(data.ROOT);
        this.defineTreePositions();
        this.openTreeFromCode("GOL0003211_P088926")
        this.findAndOpenNode(this.root, "GOL0003211_P088926");
    
  }

  /*ngOnChanges() {
    if (this.data && this.chart) {

        updateWinTreeStructure(this.data);

    }
  }
*/
  // Draw links between nodes
  diagonal(d): string {
    return "M" + d.y + "," + d.x
      + "C" + (d.y + d.parent.y) / 2 + "," + d.x
      + " " + (d.y + d.parent.y) / 2 + "," + d.parent.x
      + " " + d.parent.y + "," + d.parent.x;
  }

  zoomed(this) {
    d3.selectAll('g.chart').attr("transform", d3.event.transform);
  }

  dragged(this) {
    return function (d) {
      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }
  }

   clickTreeNode(d) {
    //recalcDimensions();
    this.openTreeFromCode(d.code);
    //recalcDimensions();
  }


 openTreeFromCode(code) {
    // JUST REMOVE THE LINE BELOW IN CASE YOU DO NOT WANT TO CLOSE OPEN NODES
    this.collapseAll(this.root);
    /*d3.selectAll(".treeicon").classed({ "treeicon": true, "selected": false });
    d3.selectAll(".highlighter").classed({ "highlighter": true, "selected": false });*/
    d3.selectAll(".treeicon").classed("treeicon", true).classed( "selected", false );
    d3.selectAll(".highlighter").classed( "highlighter", true).classed( "selected", false );
    this.findAndOpenNode(this.root, code);
    this.updateWinTreeStructure(this.root);
}

 collapseAll(d) {
    if (d.children) {
        _.forEach(d.children, function (child) {
            this.collapseAll(child);
        })
        d._children = d.children;
        d.children = null;
    } else {
        _.forEach(d._children, function (child) {
            this.collapseAll(child);
        })
    }
}

 findAndOpenNode(d, code) {
    if (d.code == code) {
        if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        /*d3.select("#" + d.code + " > .treeicon").classed({ "treeicon": true, "selected": true });
        d3.select("#" + d.code + " > .highlighter").classed({ "highlighter": true, "selected": true });*/
        d3.select("#" + d.code + " > .treeicon").classed( "treeicon selected", true);
        d3.select("#" + d.code + " > .highlighter").classed( "highlighter selected", true);
        // selectParent(d);
        return true;
    }
    var returnVal = false;
    if (d._children) {
        _.forEach(d._children, function (child) {
            if (this.findAndOpenNode(child, code)) {
                d3.select("#" + d.code + " > .treeicon").classed( "treeicon selected", true);
                d3.select("#" + d.code + " > .highlighter").classed( "highlighter selected", true);
                returnVal = true;
            }
        });
    }
    if (d.children) {
        _.forEach(d.children, function (child) {
            if (this.findAndOpenNode(child, code)) {
                d3.select("#" + d.code + " > .treeicon").classed( "treeicon selected", true);
                d3.select("#" + d.code + " > .highlighter").classed( "highlighter selected", true);
                returnVal = true;
            }
        });
    }
    if (returnVal) {
        if (d._children) {
            d.children = d._children;
            d._children = null;
        }
        return true;
    }
    return false
}
 defineTreePositions() {
    //var nodes = this.tree.nodes(this.root);
    
    this.tempForeignObj = this.chart.append("foreignObject")
        .attr({
            x: -1000,
            y: -1000,
            width: 150,
            height: "100%"
        });
    this.tempTextBody = this.tempForeignObj.append("xhtml:body")
        .attr("class", "textBody")
        .html("Oneline");
    this.topPaddingForFirstLine = -(this.tempTextBody.node().getBoundingClientRect().height / 2);
    this.maxSvgHeight += this.topPaddingForFirstLine;
    this.setNodeHeight(this.root);
    this.tempTextBody.remove();
    this.tempForeignObj.remove();
}

 setNodeHeight(node) {
    if (node.children) {
        _.forEach(node.children, function (nodeItem) {
            this.setNodeHeight(nodeItem)
        })
    }
    this.tempForeignObj.attr("width", function (d) {
        return this.barWidth - node.y;
    })
    this.tempTextBody.attr("class", "textBody " + node.type).html(node.name);
    node.calcBarHeight = this.tempTextBody.node().getBoundingClientRect().height;
    this.maxSvgHeight += node.calcBarHeight;
}


 updateWinTreeStructure(source) {
    // Compute the flattened node list. TODO use d3.layout.hierarchy.
    let nodes = d3.hierarchy(source, function (d) {
      return d.children;
    });

    this.nodes = this.tree(nodes);

    // Update the nodesâ€¦
    this.nodeAll = this.svg.selectAll("g.node")
        .data(nodes, function (d) {
            return d.id || (d.id = ++this.i);
        });
    this.nodeEnter = this.nodeAll.enter().append("g")
        .attr("id", function (d) { return d.code; })
        .attr("class", "node")
        .attr("transform", function (d) {
            if (d.type != "root") {
                // console.log(d.name, d.parent.name)
                if (d.parent && d.parent.x0 && d.parent.y0) {
                    return "translate(" + d.parent.y0 + "," + d.parent.x0 + ")";
                } else {
                    return "translate(" + d.parent.y + "," + d.parent.x + ")";
                }

            };
            return "translate(" + 0 + "," + 0 + ")";
        })
        .style("opacity", 1e-6);

    // Enter any new nodes at the parent's previous position.
    this.nodeRect = this.nodeEnter.append("rect")
        .attr("class", function(d){
            return "highlighter "+d.type;
        })
        .attr("x", "-20")
        .attr("y", this.topPaddingForFirstLine)
        .attr("height", function (d) {
            return d.calcBarHeight;
        })
        .attr("width", function (d) {
            return (this.barWidth + 20) - d.y;
        })
        .on("click", this.clickTreeNode);

    this.coloredline = this.nodeEnter.append("line")    
        .attr("x1", "-20")        
        .attr("y1", this.topPaddingForFirstLine)
        .attr("x2", "-20")
        .attr("y2", function(d){
            return this.topPaddingForFirstLine + d.calcBarHeight
        })
        .attr("stroke-width", "1")
        .attr("class", function(d){
            return "lineStyle "+d.type;
        });

    this.nodeEnter.each(function (d) {
        this.drawTreeIcons(this, d, "S");
    });

    this.nodeEnter.append('foreignObject')
        .attr('y', this.topPaddingForFirstLine)

        .attr("class", "textContainer")
        .attr({
            width: function (d) {
                return this.barWidth - d.y;
            },
            height: "100%"
        })
        .append("xhtml:body")
        .attr("class", function (d) {
            return "textBody " + d.type;
        })
        .html(function (d) {
            return d.name;
        })



    var topPos = 0;
    this.nodeAll.transition()
        .duration(this.duration)
        .attr("transform", function (d) {
            d.x = topPos;
            topPos += d.calcBarHeight;
            return "translate(" + d.y + "," + d.x + ")";
        })
        .style("opacity", 1);
    //console.log(topPos);
    d3.select("svg").transition()
        .duration(this.duration)
        .attr("height", topPos + 50);

    // Transition exiting nodes to the parent's new position.
    this.nodeAll.exit().transition()
        .duration(this.duration)
        .attr("transform", function (d) {
            return "translate(" + d.parent.y + "," + d.parent.x + ")";
        })
        .style("opacity", 1e-6)
        .remove();

    // Update the links
    this.link = this.svg.selectAll("path.link")
        .data(this.tree.links(nodes), function (d) {
            return d.target.id;
        });
    // Enter any new links at the parent's previous position.
    this.linkEnter = this.link.enter().insert("path", "g")
        .attr("class", "link")
        .attr("d", function (d) {
            var o;
            if (d.type != "root") {
                // can use y:d.source.y for another type of transition. 
                o = { x: d.source.x, y: d.target.y }
            } else {
                o = { x: 0, y: 0 }
            };
            return this.elbow({
                source: o,
                target: o
            });
        })
        .transition()
        .duration(this.duration)
        .attr("d", this.elbow);
    // Transition links to their new position.
    this.link.transition()
        .duration(this.duration)
        .attr("d", this.elbow);
    // Transition exiting nodes to the parent's new position.
    this.link.exit().transition()
        .duration(this.duration)
        .attr("d", function (d) {
            var o = { x: d.source.x, y: d.target.y }
            return this.elbow({
                source: o,
                target: o
            });
        })
        .remove();
    // Stash the old positions for transition.
    /*nodes.forEach(function (d) {
        d.x0 = d.x;
        d.y0 = d.y;
    });*/
}

 openTreeNode(d) {
    d.children = d._children;
    //console.log(d)
}
color(d) {
    return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
}

 elbow(d?:any, i?:any) {
    var sourceYPos = d.source.y;
    var targetYPos = d.target.y;
    if (d.source.y != 0) {
        sourceYPos = d.source.y - 20;
    }
    if (d.target.y != 0) {
        targetYPos = d.target.y - 20;
    }
    return "M" + (sourceYPos) + "," + (d.source.x)
        + "H" + (targetYPos) + "V" + (d.target.x)
        + (d.target.children ? "" : "h" + (this.margin.right));
}

 drawTreeIcons(ele, d, size) {
    var currentElement = d3.select(ele);
    var iconElement;
    switch (d.type) {
        case "root":
            iconElement = currentElement.append("circle").attr("r", "9");
            break;
        case "pillar":
            iconElement = currentElement.append("circle").attr("r", "7");
            break;
        case "outcome":
            iconElement = currentElement.append("rect")
                .attr("x","-6")
                .attr("y","-5")
                .attr("width", "12")
                .attr("height", "12")
                .attr("fill", "rgb(255,172,10)")
                .attr("fill-opacity", "1 !important");
            
            break;
        case "folder":
            iconElement = currentElement.append("circle").attr("r", "6");
            break;
        case "project":
            //iconElement = currentElement.append("circle").attr("r", "4");
            iconElement = currentElement.append("polygon")
                    .attr("transform", "translate(-20,-11) scale(0.055)")
                    .attr("points", "350,75  379,161 469,161 397,215 423,301 350,250 277,301 303,215 231,161 321,161")
                    .attr("fill", "#7dac00")
                    .attr("stroke", "#7dac00")
                    .attr("stroke-width", "1.5");
            break;
        case "indicator":
            iconElement = currentElement.append("polygon")
                    .attr("transform", "translate(0,0) scale(0.8)")
                    .attr("points", "-12,0 -8,-5.5 8,-5.5 6,0 8,5.5 -8,5.5")
                    .attr("fill", "#69d7d6")
                    .attr("stroke", "#69d7d6")
                    .attr("stroke-width", "1.5")
            break;
    };

    iconElement.attr("class", "treeicon")
        .on("click", this.clickTreeNode);
}
}

