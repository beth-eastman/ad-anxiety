 /*
  * resources.js
  * Resources contains data for articles, books, links, and facts to be used in the Resource section of the application.
  *
  * Created by Bethany Eastman on 06/21/17.
  *
  * AD Anxiety
  *
  * Copyright © 2009-2017 United States Government as represented by
  * the Chief Information Officer of the National Center for Telehealth
  * and Technology. All Rights Reserved.
  *
  * Copyright © 2009-2017 Contributors. All Rights Reserved.
  *
  * THIS OPEN SOURCE AGREEMENT ("AGREEMENT") DEFINES THE RIGHTS OF USE,
  * REPRODUCTION, DISTRIBUTION, MODIFICATION AND REDISTRIBUTION OF CERTAIN
  * COMPUTER SOFTWARE ORIGINALLY RELEASED BY THE UNITED STATES GOVERNMENT
  * AS REPRESENTED BY THE GOVERNMENT AGENCY LISTED BELOW ("GOVERNMENT AGENCY").
  * THE UNITED STATES GOVERNMENT, AS REPRESENTED BY GOVERNMENT AGENCY, IS AN
  * INTENDED THIRD-PARTY BENEFICIARY OF ALL SUBSEQUENT DISTRIBUTIONS OR
  * REDISTRIBUTIONS OF THE SUBJECT SOFTWARE. ANYONE WHO USES, REPRODUCES,
  * DISTRIBUTES, MODIFIES OR REDISTRIBUTES THE SUBJECT SOFTWARE, AS DEFINED
  * HEREIN, OR ANY PART THEREOF, IS, BY THAT ACTION, ACCEPTING IN FULL THE
  * RESPONSIBILITIES AND OBLIGATIONS CONTAINED IN THIS AGREEMENT.
  *
  * Government Agency: The National Center for Telehealth and Technology
  * Government Agency Original Software Designation: ProductName001
  * Government Agency Original Software Title: ProductName
  * User Registration Requested. Please send email
  * with your contact information to: robert.a.kayl.civ@mail.mil
  * Government Agency Point of Contact for Original Software: robert.a.kayl.civ@mail.mil
  *
 */

/* Article content */
// key: the unique identifier for each article
// title: the title of the article
// text: the text of each section of the article
const articles = [
  {
    key: 0,
    title: 'When Worry Gets Out of Control',
    text: 'People with anxiety disorders feel extremely fearful and unsure. Most people feel anxious about something for a short time now and again, but people with anxiety disorders feel this way most of the time. Their fears and worries make it hard for them to do everyday tasks. About 18% of American adults have anxiety disorders. Children also may have them. Treatment is available for people with anxiety disorders. Researchers are also looking for new treatments that will help relieve symptoms. This booklet is about one kind of anxiety disorder called generalized anxiety disorder, or GAD. For information about other kinds of anxiety disorders, please see the end of this booklet.',
  },
  {
    key: 1,
    title: 'Generalized Anxiety Disorder',
    text: 'All of us worry about things like health, money, or family problems at one time or another. But people with GAD are extremely worried about these and many other things, even when there is little or no reason to worry about them. They may be very anxious about just getting through the day. They think things will always go badly. At times, worrying keeps people with GAD from doing everyday tasks. People with GAD may be very anxious about just getting through the day. They think things will always go badly.',
  },
  {
    key: 2,
    title: 'Common symptoms',
    text: 'People with GAD: worry very much about everyday things for at least six months, even if there is little or no reason to worry about them, can’t control their constant worries, know that they worry much more than they should, can’t relax, have a hard time concentrating, are easily startled, have trouble falling asleep or staying asleep., common body symptoms are: feeling tired for no reason, headaches, muscle tension and aches, having a hard time swallowing, trembling or twitching, being irritable, sweating, nausea, feeling lightheaded, feeling out of breath, having to go to the bathroom a lot, hot flashes.',
  },
  {
    key: 3,
    title: 'When does GAD start?',
    text: 'GAD develops slowly. It often starts during the time between childhood and middle age. Symptoms may get better or worse at different times, and often are worse during times of stress. People with GAD may visit a doctor many times before they find out they have this disorder. They ask their doctors to help them with the signs of GAD, such as headaches or trouble falling asleep, but don’t always get the help they need right away. It may take doctors some time to be sure that a person has GAD instead of something else.',
  },
  {
    key: 4,
    title: 'Is there help?',
    text: 'There is help for people with GAD. The first step is to go to a doctor or health clinic to talk about symptoms. People who think they have GAD may want to bring this booklet to the doctor, to help them talk about the symptoms in it. The doctor will do an exam to make sure that another physical problem isn’t causing the symptoms. The doctor may make a referral to a mental health specialist. Doctors may prescribe medication to help relieve GAD. It’s important to know that some of these medicines may take a few weeks to start working. In most states only a medical doctor (a family doctor or psychiatrist) can prescribe medications. The kinds of medicines used to treat GAD are listed below. Some are used to treat other problems, such as depression, but also are helpful for GAD: antidepressants, anti-anxiety medicines, beta blockers. Doctors also may ask people with GAD to go to therapy with a licensed social worker, psychologist, or psychiatrist. This treatment can help people with GAD feel less anxious and fearful. There is no cure for GAD yet, but treatments can give relief to people who have it and help them live a more normal life. If you know someone with signs of GAD, talk to him or her about seeing a doctor. Offer to go along for support. To find out more about GAD, call 1-866-615-NIMH (1-866-615-6464) to have free information mailed to you.',
  },
  {
    key: 5,
    title: 'Who pays for treatment?',
    text: 'Most insurance plans cover treatment for anxiety disorders. People who are going to have treatment should check with their own insurance companies to find out about coverage. For people who don’t have insurance, local city or county governments may offer treatment at a clinic or health center, where the cost is based on income. Medicaid plans also may pay for GAD treatment.',
  },
  {
    key: 6,
    title: 'Why do people get GAD?',
    text: 'GAD sometimes runs in families, but no one knows for sure why some people have it, while others don’t. When chemicals in the brain are not at a certain level it can cause a person to have GAD. That is why medications often help with the symptoms because they help the brain chemicals stay at the correct levels. To improve treatment, scientists are studying how well different medicines and therapies work. In one kind of research, people with GAD choose to take part in a clinical trial to help doctors find out what treatments work best for most people, or what works best for different symptoms. Usually, the treatment is free. Scientists are learning more about how the brain works so that they can discover new treatments.',
  },
  {
    key: 7,
    title: 'For More Information on GAD and Other Anxiety Disorders',
    text: 'Visit the National Library of Medicine’s MedlinePlus www.nlm.nih.gov/medlineplus, En Español, http://medlineplus.gov/spanis, For Information on Clinical Trials for GAD and, Other Anxiety Disorders, NIMH Clinical Trials Web page, www.nimh.nih.gov/studies/index.cfm, National Library of Medicine Clinical Trials Database, www.clinicaltrials.gov, Information from NIMH is available in multiple formats. You can browse online, download documents in PDF, and order paper brochures by mail. You can order NIMH publications online at www.nimh.nih.gov. If you do not have Internet access, please contact the NIMH Information Center at the numbers listed below.',
  },
  {
    key: 8,
    title: 'For Further Information',
    text: 'National Institute of Mental Health, Science Writing, Press, & Dissemination Branch, 6001 Executive Boulevard, Room 8184, MSC 9663, Bethesda, MD 20892-9663, Phone: 301-443-4513 or 1-866-615-NIMH (6464) toll-free, TTY: 301-443-8431, TTY: 866-415-8051 toll-free, FAX: 301-443-4279, E-mail: nimhinfo@nih.gov Web site: www.nimh.nih.gov',
  },
];


/* Link content */
// title: the title for each link
// link: the url for each link
// text: a description of the content located for each link
const links = [
  {
    title: 'Anxiety Disorders Association of America',
    link: 'http://www.adaa.org/',
    text: 'Comprehensive information on anxiety disorders, multiple resources including help finding a therapist specializing in the treatment of anxiety disorders.',
  },
  {
    title: 'National Institutes of Mental Health',
    link: 'http://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml',
    text: 'A source for government publications and information about medications for anxiety.',
  },
  {
    title: 'Substance Abuse and Mental Health Services Information, National Mental Health Information Center, Center for Mental Health Services',
    link: 'http://store.samhsa.gov/facet/Issues-Conditions-Disorders/term/Anxiety-Disorders-Phobias',
    text: 'Summary information on symptoms and treatment of anxiety disorders.',
  },
  {
    title: 'MentalHelp.net',
    link: 'http://www.mentalhelp.net/poc/center_index.php?id=1',
    text: 'A commercial website providing information on many behavioral health topics including anxiety.',
  },
];

/* Books content */
// title: a book's title
// text: a list of sources of a book
// description: a descprition of the book
const books = [
  {
    title: 'Mastery of Your Anxiety and Worry: Workbook (Treatments That Work).',
    text: 'by Craske, Michelle G. and Barlow, David H. 2006 Oxford University Press: New York',
    description: 'This is a workbook allowing you to work on exercises by two of the best know researchers in the field.',
  },
  {
    title: 'Don\'t Panic: Taking Control of Anxiety Attacks. Third Edition.',
    text: 'Wilson, Reid. 2009 Harper Collins Publishers: New York',
    description: 'A comprehensive self-help approach to treating Panic Disorder.',
  },
  {
    title: 'Stop Obsessing: How to Overcome Your Obsessions and Compulsions (Revised Edition). Foa, Edna B and Wilson, Reid.',
    text: '2001 Bantam Paperbacks',
    description: 'This book provides concrete guidance for overcoming OCD.',
  },
  {
    title: 'The OCD Workbook: Your Guide to Breaking Free from Obsessive-Compulsive Disorder.',
    text: 'Hyman, Bruce M. and Pedrick, Cherry. 2005 New Harbinger Publications',
    description: 'A workbook format which allows you to work with your own symptoms of OCD.',
  },
  {
    title: 'Dying of Embarrassment: Help for Social Anxiety & Phobia.',
    text: 'Markway, Barbara G., Pollard, Alec C., Flynn, Teresa, and Carmin, Cheryl N. 1992. New Harbinger Publications',
    description: 'A well-written book providing guidance for coping with Social Phobia.',
  },
];

/* Fact content */
// section:
const facts = [
  {
    sections: [
      {
        key: 0,
        title: 'Understanding Anxiety',
        text: 'Many different words can be used to describe the feeling of anxiety. Anxiety can be described as motivation, excitement, tension, stress, worry, nerves, and phobias. Anxiety can be a normal reaction to new and positive challenges or stressful events. Anxiety can also be the result of faulty thinking and other controllable causes which become problematic and interfere with life and health. Everyone has felt anxious at some time in life. Anxiety can be experienced in a number of ways including: Butterflies in your stomach before a big date, Knots in your stomach when your supervisor is upset, Pounding heart when you hear a strange noise outside your homeIn some situations, anxiety can be very useful. Anxiety is a sign that tells the body that it should be on alert. Anxiety helps to prepare a person for action. Anxiety can be a motivator to study for an exam and work hard to keep a supervisor happy. Anxiety can signal a person to act, which can help him or her cope with a difficult situation.',
      },
      {
        key: 0,
        title: 'Are you a worrier?',
        text: 'Worrying is a form of anxiety. Worry can be a natural response to life conditions. Everyone worries about something at some time. Worry becomes problematic when worrying and its associated behaviors interfere with the ability to live a happy, healthy life. Signs that worry might be problematic in your life: You are chronically on alert and thinking about potential future dangers or threats. You are consistently making negative predictions about the future. You tend to overestimate the likelihood that something bad will happen. You repeat worried thoughts over and over again in your head.',
      },
      {
        key: 1,
        title: 'When is anxiety a problem?',
        text: 'Some amount of anxiety is normal. However, an anxiety disorder can keep a person from coping with the ups and downs of life. An anxiety disorder can make a person feel anxious most of the time without any particular cause. In some cases, the anxious feelings may be so uncomfortable that an individual will do anything necessary to avoid those feelings including stopping or changing everyday activities. Anxiety can become so severe that it prevents a person from leaving his or her home. Severe anxiety can prevent a person from going to work or engaging in meaningful activities with friends and family.',
      },
      {
        key: 2,
        title: 'What are the most common types of anxiety disorders?',
        text: 'The anxiety disorders that interfere with living life are Generalized Anxiety Disorder, Panic Disorder, Obsessive-Compulsive Disorder, Social Anxiety Disorder, Phobias, and Post-traumatic Stress Disorder. You can find information about each of these by visiting www.adaa.org',
      },
      {
        key: 3,
        title: 'Who is affected?',
        text: 'Anyone can be affected by problems with anxiety. In fact, as many as 25% of all adults in America experience intense levels of anxiety at some time in life. About 18% of American adults have an anxiety disorder in any given year. Individuals with one type of anxiety disorder are at a greater risk for other types of anxiety disorders and related problems.',
      },
      {
        key: 4,
        title: 'Can anxiety problems be treated?',
        text: 'Yes. The first step on the road to recovery is to understand the causes of anxiety disorders, the symptoms, and the factors that can make anxiety disorders worse. Treatments involve cognitive therapies, medication, or a combination of the two. Treatments are very effective when offered by health care professionals who are specifically trained to treat anxiety disorders.',
      },
      {
        key: 5,
        title: 'How Does Anxiety Affect Family Members?',
        text: 'Anxiety symptoms are wide-ranging and affect people in almost all areas of their lives, so it is no surprise that anxiety can affect relationships with family, significant others, and friends. Anxiety disorders can be stressful for family members, too.',
      },
      {
        key: 6,
        title: 'Social Isolation',
        text: 'Those with anxiety disorders often avoid engaging with others because of fear of embarrassing themselves. This can put a strain on significant others and on children. Those with the anxiety disorders may want to be alone and may not want to engage in activities outside the house with family members and friends. In addition to avoiding others, those with anxiety often avoid stressful situations or public places. This avoidance can greatly inhibit daily activities for the family members and reduce the number and quality of interactions with family and friends.',
      },
      {
        key: 7,
        title: 'Chronic Tension',
        text: 'People with anxiety disorders often feel restless and tense. Family members feel that tension, too, and often don’t know how to respond. Family members describe their experience as “walking on eggshells” around the individual with the anxiety disorder. Tension in the family can cause problems bonding and communicating.',
      },
      {
        key: 8,
        title: 'What to do if a Family Member Has Anxiety Problems',
        text: 'Engage in empathy: Try to see the world through the eyes of the anxious family member. The world likely seems like a scary place for them. Understanding his or her feelings and thoughts can increase the understanding of what they are going through. Gather information: Take time to learn about the family member’s condition. Talk to them and read about the condition and its treatment. Get involved: Encourage the family member to get help. Attending counseling and doctor’s appointments with the family member can show support and can also provide information about the anxiety condition and ways to improve it. Anxious individuals can experience difficulties concentrating and responding to multiple sources of information. A family member can listen to information that an anxious individual might not be able to hear.',
      },
      {
        key: 9,
        title: 'Resources / Websites',
        text: 'Anxiety Disorder Association of America (http://www.adaa.org/) National Institute of Mental Health (http://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml)',
      },
    ],
  },
  {
    sections: [
      {
        key: 0,
        title: 'Managing Anxiety and Worry',
        text: 'There are many strategies and techniques that can be used to help cope with worry and anxiety. Some involve strategies to help reduce physical symptoms of anxiety directly through methods like muscle relaxation, imagery, or breathing exercises. Other strategies are designed to teach worriers to change catastrophic thinking so that imagining worst case scenarios and predictions of disaster are either reduced or such thoughts aren’t taken seriously. Treatment strategies used by professional health care providers usually address both problems.',
      },
      {
        key: 1,
        title: 'Professional Help',
        text: 'Professionals such as physicians, psychologists, counselors, social workers, and psychiatrists are trained to help mange anxiety. If you seek professional help for managing anxiety, it is important to find out whether the professional you are talking to has specialized training in treatinganxiety disorders. If not, try to find someone who specializes in treating anxiety. One online resource for identifying specialists in this area is the Anxiety Disorders Association of America (www.adaa.org).',
      },
      {
        key: 2,
        title: 'Psychotherapy',
        text: 'Therapists use a variety of techniques to help with anxiety. Techniques and strategies that work for one person might not work for another. So, it is important to be able to communicate with a therapist about what is or is not working. Some of the most common therapies for treating anxiety are Cognitive-Behavioral Therapy (CBT) and Exposure Therapy. CBT is a treatment that focuses on how thoughts and feelings influence behavior. CBT teaches individuals to recognize when their thoughts are unrealistic and contribute to anxiety. The therapist works to help change maladaptive thoughts and beliefs to more realistic thoughts and to determine what behaviors are the result of the unrealistic thoughts. Realistic thinking results in reduced anxiety. Exposure Therapy is a treatment strategy in which a therapist works with a client to seek out, under controlled conditions, anxiety producing situations that the client finds frightening. By doing so, individuals learn that the feared situation is not dangerous and that the catastrophic thoughts are not accurate. With practice, the catastrophic thoughts about the situation are no longer able to create fear.',
      },
      {
        key: 3,
        title: 'Medication',
        text: 'Physicians and psychiatrists can prescribe medications that change how the chemicals in the brain are produced and/or work with other chemicals. Medications are not universal, meaning any specific medication may or may not be effective based on your body type or sensitivity, and may some have side effects. Research indicates that medications for anxiety, especially for panic disorder, are more beneficial when they are combined with cognitive therapy. The doctor who prescribes the medications will monitor mood and health closely to determine if the medications are beneficial.',
      },
      {
        key: 4,
        title: 'Reducing Physical Symptoms of Anxiety',
        text: 'Relaxation exercises to reduce physical tension are powerful tools for calming both the mind and the body. However, it is important to understand that these exercises shouldn’t be used to “escape” or avoid anxious thoughts or behaviors. These strategies are best used to calm and relax more effectively after you have addressed your fear, anxious thoughts and/ or behaviors. To learn more about these skills, visit the Life Stress booklet on AfterDeployment. Progressive Muscle Relaxation - Progressive Muscle Relaxation teaches relaxation of the muscles through deliberate tensing and relaxation for each of the major muscle groups in the body. After practicing progressive muscle relaxation over time, it becomes easier to identify a tensed muscle and relax the muscle with the tension and relaxation sequence, reducing overall tension in the body and contributing to a sense of calm. Guided Imagery/Visualization - Guided imagery and visualization promote relaxation by painting a mental picture of a calm, safe place. After practicing this technique several times, individuals are often able to use visualization on their own. This technique helps to reduce worry by reducing overall stress.  Diaphramatic Breathing – Often called “belly breathing,” diaphramatic breathing is simply taking deep breaths of air into the lungs using your diaphragm and exhaling slowing. Repeated diaphragmatic breathing helps to calm the nervous system and the “fight-or flight” response. Distraction - In addition to these formal techniques, try engaging in an activity that is relaxing for you. Relaxing activities vary from person to person. Relaxing activities might include reading, playing sports, spending time outside, listening to music, practicing yoga, playing with a pet, etc.',
      },
      {
        key: 5,
        title: 'Changing Worried Thinking',
        text: '',
      },
      {
        key: 6,
        title: 'Risk Assessment',
        text: 'People who worry frequently tend to overestimate the risk of specific situations; they view a situation as being more risky than it actually is. Most worriers focus their time and attention on the worst case scenarios and then engage in catastrophic thinking, which only makes the problems and worries seem worse. Individuals who spend most of their time and energy worrying tend to forget that they have the ability to cope with many stressful events. Learning to accurately assess risk can greatly reduce anxiety.',
      },
      {
        key: 7,
        title: 'Resources',
        text: 'Websites Anxiety Disorder Association of America ( http://www.adaa.org /) National Institute of Mental Health ( http://www.nimh.nih.gov/health/topics/anxiety-disorders/index.shtml ) Books Mastery of Your Anxiety and Panic: Workbook by David H. Barlow and Michelle G. Craske Get Out of Your Mind and into Your Life by Steven C. Hayes, Ph.D. Finding Life Beyond Trauma by Jacqueline Pisterello The Anxiety and Phobia Workbook by Edmund J. Bourne',
      },
    ],
  },
  {
    sections: [
      {
        key: 0,
        title: 'Causes of Anxiety',
        text: 'Anxiety problems can be caused by a variety of factors, and in most instances, several factors contribute to the development and maintenance of an anxiety problem. A person\'s genetics, life experience, and current environment all seem to contribute to the development of anxiety disorders. Some of the most common factors are:',
      },
      {
        key: 1,
        title: 'Family History / Genetics',
        text: 'Anxiety disorders often run in families. If parents or other close relatives have an anxiety disorder, children are at higher risk of developing an anxiety disorder in the future. Researchers are identifying specific genes that play a role in the development of anxiety disorders. These genes can be passed down from one generation to the next.',
      },
      {
        key: 2,
        title: 'Role Models',
        text: 'Being raised in a family that shows fear and anxiety on a daily basis can affect a person in adulthood. Children learn how to behave, in part, by watching their parents and other adults. Children learn by modeling or copying the adults’ behaviors and assume that the ways that their trusted adults respond to situations are the "normal" and correct ways of responding.',
      },
      {
        key: 3,
        title: 'Brain Chemistry',
        text: 'Chemical messengers in the brain called neurotransmitters help to regulate thoughts and feelings. If the neurotransmitters become unbalanced or do not work correctly, anxiety symptoms can result.',
      },
      {
        key: 4,
        title: 'Traumatic Events',
        text: 'Traumatic events can trigger anxiety disorders in individuals at higher risk due to biological (genetic) and environmental (family and stress) factors. A traumatic event such as witnessing death or engaging in battle can lead to feelings of anxiety which won\'t go away easily. If the individual is not able to resolve the anxiety surrounding the event, the anxiety can grow and contribute to other anxious thoughts and behaviors.',
      },
      {
        key: 5,
        title: 'What Makes Anxiety Worse?',
        text: 'Stress can make anxiety worse by having a negative effect on the body, on thoughts and beliefs, and on emotions.',
      },
      {
        key: 6,
        title: 'Stress',
        text: 'Relationships with significant others and family members can be a great source of support. When these relationships become strained, which frequently happens following a deployment, anxiety levels can increase. If relationships with significant others and family members are strained, the social support gained from those relationships will be affected, which can increase anxiety levels.',
      },
      {
        key: 7,
        title: 'Relationship / Family Stress',
        text: 'Relationships with significant others and family members can be a great source of support. When these relationships become strained, which frequently happens following a deployment, anxiety levels can increase. If relationships with significant others and family members are strained, the social support gained from those relationships will be affected, which can increase anxiety levels.',
      },
      {
        key: 8,
        title: 'Job Stress',
        text: 'Returning from a deployment often means returning to a different kind of work or starting a new job. These changes can be very stressful and can make anxiety worse.',
      },
      {
        key: 9,
        title: 'Financial Stress',
        text: 'Stress related to money is a huge source of anxiety. It often takes some time following a deployment to get finances in order.',
      },
      {
        key: 10,
        title: 'Caffeine and Other Stimulants',
        text: 'Stimulants such as caffeine found in coffee, tea, soda, energy drinks, chocolate, and some over-the-counter medications can aggravate anxiety. Also, nicotine in cigarettes or smokeless tobacco can increase anxiety. If you use caffeine and/or nicotine regularly, you might not even realize the impact that those substances may have on your level of anxiety. Cutting back on caffeine or going "cold turkey" can cause more anxiety and physical symptoms like headaches at first, but after the initial withdrawal symptoms, anxiety will be less.',
      },
    ],
  },
];

export {
  articles,
  books,
  links,
  facts,
};
