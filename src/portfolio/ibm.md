---
layout: layouts/project.njk
permalink: /portfolio/{{ page.fileSlug }}/
title: IBM Research
subtitle: Solving for Limited Healthcare Access in Sub-Saharan Africa.
image: IBM.png
sort-order: 30
sectionsConfig:
  - title: Intro
    layout: project_intro
    banner: Solving for Limited Healthcare Access in Sub-Saharan Africa
    clientTitle: Organization
    client: IBM Research| Africa
    role: UX Researcher
    timeline: 6 weeks
    scope: Evaluative Research
  - title: About the project
    image: CHK_IBM.jpg
  - title: Business Impact
  - title: Research Methods
    layout: project_research_methods
    methods:
      - title: "Environmental Audit"
        description: "We observed user behavior and interaction with three existing BMI and blood pressure kiosks in moderate to high volume of foot traffic areas. This audit helped us identify local usage patterns, kiosk placement issues, and potential adoption barriers in Kenya’s urban settings."
        image: Environment Audit.png
      - title: "Usability Testing"
        description: "Using Nielsen’s heuristics, we conducted a heuristic evaluation followed by in-lab usability tests. Six participants included both target (culturally Kenyan) and non-target populations, allowing us to capture usability differences due to cultural context. We noted critical issues in task completion, error rates, and user comfort during key interactions."
        image: Usability Test Image.png
      - title: "Diverse User Groups"
        description: "To simulate realistic usage, we screened for culturally Kenyan and non-Kenyan users, providing a comparative understanding of how cultural background affected usability."
     

---
# Intro
I co-led user research to evaluate and optimize a late-stage prototype of a self-service health kiosk aimed at managing hypertension in resource-constrained environments, working closely with a multidisciplinary team (UX Researchers, Research Scientists, Engineers, and Medical Professionals) to ensure the solution was both usable and culturally relevant.


# About the Project
Hypertension is a growing health burden in sub-Saharan Africa, affecting an estimated 10 - 20 million people across the region [Cappuncio, 2016](https://link.springer.com/article/10.1007/s11739-016-1423-9). A national survey in Kenya revealed that 24.5% of adults aged 18–69 years had hypertension, with only 15.6% aware of their condition [KENYA STEPwise, 2015](https://aphrc.org/wp-content/uploads/2019/07/Steps-Report-NCD-2015.pdf).

To address these issues, **IBM Research | Africa**’s healthcare team developed the Cognitive Health Companion (CHC) – a self-service health kiosk designed to collect, analyze, and provide users with real-time health data. This innovative solution empowered patients with hypertension to take control of their health in resource-constrained environments. The kiosk featured a machine learning (ML) component that enabled continuous and accurate measurements, delivering tailored and personalized insights to users. By leveraging ML, the system adapted to individual health profiles, offering actionable recommendations that supported better health management and outcomes.


# The Problem
The healthcare product research team’s initial exploration of the problem space relied on literature and expert consultations but lacked direct engagement with target users in Kenya. Our role was to bridge this gap by evaluating and enhancing the CHC kiosk’s usability and cultural relevance to support effective hypertension management. 

# Research Goals
- Identify cultural barriers and accessibility challenges
- Evaluate usability of the CHC kiosk prototype
- Assess user comfort with self-service health technology
- Provide recommendations for interface optimization

# Research Methods


# Key Insights

**Cultural context**: The environmental audit revealed that **users in Kenya were accustomed to kiosks with attendants assisting them, leading to a significant knowledge gap when interacting with our self-service kiosk**. This impacted the ML system’s ability to collect reliable input data, as users struggled to interact with the kiosk correctly. For example, none of the target population group interacted with the tablet without first asking the moderator and assumed they did not need to interact with the CHC device for the service to initiate:

> User-1 glanced around for a while and then stared at the tablet: "I need to read?"

> User-5 stepped onto the scale and looked around without touching the tablet. After **141 seconds**, User-5 then asked: "I should fill it in?"

> User-6 asked: "Do I have to touch the machine? Do I talk to the machine or touch the button?"

These gaps in interaction meant the ML component had incomplete or delayed data to analyze, potentially affecting its ability to deliver personalized insights and undermining its predictive accuracy.

**Inferface Usability**: Target users experienced a **100% failure rate on registration and iris scanning** compared to a **66.7% failure** rate among non-target users. Task completion times for target users were on average **10.6% slower** than non-target users, particularly in the more complex registration and biometric tasks. These challenges introduced noisy or invalid data into the ML system, compromising its ability to establish accurate baselines for health measurements and reducing the reliability of personalized feedback.

**User Satisfaction**: Despite **usability issues, target participants rated satisfaction high (average satisfaction score of 9.33/10)**, whereas non-target users rated it significantly lower (5/10). This discrepancy suggests a **strong social desirability bias among target users**, masking potential dissatisfaction and usability issues. Adjustments to the kiosk’s interface based on genuine user needs were essential to ensure that ML recommendations were both accurate and well-received.

![User satisfaction rating](/assets/images/Satisfaction.png){.image .is-centered}

**Heuristic Evaluation Limitations**: The standard heuristic evaluation, conducted by a Western multinational research team, provided a simplified approach to identifying usability issues. However, it overlooked cultural nuances in intuitive interactions, leading to an underestimation of the severity of some challenges. 


# Business Impact

- **Established Need for Foundational Research**: Highlighted the critical importance of designing products that are intuitive for target user groups, especially when the development team lacks direct experience or deep understanding of the users’ context. Emphasized the role of foundational research in bridging the "Knowledge Gap" between users’ existing knowledge and the skills required for successful interaction with complex kiosk systems. Additionally, executing foundational research ensures the ML system can function optimally by facilitating the collection of reliable, high-quality data from users, which is essential for generating accurate and actionable insights.

- **Reduced Participant Bias in Usability Testing**: Adapted usability testing protocols to mitigate participant bias, leading to more honest, actionable feedback from users, which informed product adjustments for improved user engagement. 
  
- **Patent Achievement**: Insights led to the development of an innovation product testing methodology, which contributed to protected intellectual property for IBM. [US20180189802 A1](https://www.taogunyoku.com/assets/pubs/System,%20Method%20and%20Computer%20Program%20Product%20For%20Sensory%20Simulation%20During%20Product%20Testing.pdf)
  
- **Research Influence**: Co-authored a chapter with colleagues, contributing to the field with research insights and advancing industry knowledge on user experience in healthcare technology. This publication underscored the importance of cultural context and usability in designing impactful solutions for emerging markets. [Palmer, J.M., Ogunyoku, T.A., and Hammond, C.R., 2018](https://www.taylorfrancis.com/chapters/edit/10.1201/b22191-11/intuitive-interaction-industry-user-research-jesyka-palmer)



