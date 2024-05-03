import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Image,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import styles from "./Experience.module.css";
import { getImageUrl } from '../../utils';

const experiences = [
  // {
  //   title: '',
  //   location: '',
  //   link: '',
  //   description: [],
  //   tags: [],
  //   logo: [],
  //   photos: [],
  //   captions: [],
  // },
  {
    title: 'Software Developer Intern @ FinLit Island Education Association',
    location: 'Vancouver, BC, Jan 2024 - Present',
    link: 'https://sites.google.com/finlitisland.com/education',
    description: [
      'Co-founded a youth-led organization that aims to gamify financial literacy content for Canadian high-school students, winning the 🥉 place microgrant at the Youthful Cities – Urban Work Summit 2024',
      'Spearheading the development of minigames to teach lending, credit, and budgeting concepts',
    ],
    logo: getImageUrl("logos/finlit.png"),
    photos: [],
    captions: [
      '',
    ],
  },
  {
    title: 'Board Director @ George Derby Care Society',
    location: 'Burnaby, BC, Jan 2024 - present',
    link: 'http://georgederby.ca/georgederbycentre.html',
    description: [
      'Serving on Quality and Risk Management and Governance and Strategy committees, contributing to organizational oversight',
    ],
    logo: getImageUrl("logos/george.png"),
    photos: [],
    captions: [],
  },
  {
    title: 'Workforce Data Analyst @ Vancouver City Savings Credit Union',
    location: 'Vancouver, BC, Feb 2022 - Aug 2023',
    link: 'https://www.vancity.com/',
    description: [
      'Led quarterly performance trend analyses to guide budgetary and business strategies; developed biweekly forecasting reports, contributing to a 14% improvement in contact centre service',
      'Identified and resolved internal ad-hoc technological issues, optimizing operational efficiency',
    ],
    logo: getImageUrl("logos/vancity.png"),
    photos: [],
    captions: [],
  },
  {
    title: 'Young Director @ Fora',
    location: 'Canada, Apr 2023 - present',
    link: 'https://www.foranetwork.org/riseonboards',
    description: [
      'Selected as one of 34 nationwide to champion gender equity and shape decision-making on governance boards',
      'Acquired expertise in governance, financial management, fundraising, professional communications, and leadership',
    ],
    logo: getImageUrl("logos/fora.png"),
    photos: [],
    captions: [],
  },
  {
    title: 'Research Assistant @ UBC Hotel Study',
    location: 'Vancouver, BC, Sept 2019 - Aug 2021',
    link: 'https://hotelstudy.med.ubc.ca/about/',
    description: [
      'Managed database of 500+ subjects spanning 10+ years, ensuring data integrity and accessibility, and worked directly with marginalized individuals in the Downtown Eastside, facilitating clinical and psychiatric support',
      'Utilized R to perform logistic regression analysis, extracting key insights from complex datasets for first-author publication',
    ],
    logo: getImageUrl("logos/ubc.png"),
  },
  {
    title: 'Research Assistant @ BC Cancer Research Centre',
    location: 'Vancouver, BC, May 2017 - Feb 2020',
    link: 'https://www.bccrc.ca/dept/io/labs/poh-lab',
    description: [
      'Conducted complex lab procedures – microdissection and DNA/RNA extraction for head and neck cancer research projects, demonstrating meticulous attention to detail and adherence to strict protocols',
    ],
    logo: getImageUrl("logos/bccrc.png"),
  },
];

const Experience = ({ id }) => {
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(targetRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className={styles.container} id="experiences">
    <h2 className={styles.title}>experiences</h2>
    <Box
      ref={targetRef}
      id={id}
      className="fade-in"
      flexDirection="column"
      alignItems="center"
      width={{ base: '340px', sm: '470px', md: '700px', lg: '800px' }}
    >
      <Accordion
        // defaultIndex={[0]}
        allowMultiple
        w="auto"
        mx="auto"
      >
        {experiences.map((experience, id) => {
          const { title, location, link, description, logo } = experience;
          const photos = experience?.photos;
          const captions = experience?.captions;
          return (
            <AccordionItem key={id}>
              <Text>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    alignItems="center"
                    display="flex"
                    flexDir="row"
                    fontWeight="bold"
                    fontSize="16.5px"
                    px="10px"
                    className={styles.jobTitle}
                  >
                    <Image
                      mr="30px"
                      w="80px"
                      src={logo}
                      alt="company-logo"
                    />
                    <Text style={{ fontFamily: 'HagridRegular, sans-serif', color: '#5d7298' }}>{title}</Text>
                  </Box>
                  <AccordionIcon mr="20px" />
                </AccordionButton>
              </Text>

              <AccordionPanel
                pb={4}
                pl="35px"
              >
                <VStack alignItems="flex-start">
                  <Text
                    fontWeight="600"
                    fontSize="17px"
                    color="#5d7298"
                    style={{ fontFamily: 'Raleway, sans-serif' }}
                    className={styles.location}
                  >
                    📍 {location}
                  </Text>
                  <VStack
                    spacing="10px"
                    pl="10px"
                    alignItems="baseline"
                  >
                    {description.map((desc, id) => {
                      return (
                        <Text
                          fontSize="15px"
                          style={{ fontFamily: 'Raleway, sans-serif' }}
                          color="#5d7298"
                          key={id}
                        >
                          • {desc}
                        </Text>
                      );
                    })}
                  </VStack>
                  <Flex
                    flexDirection="row"
                    flexWrap="wrap"
                    py="10px"
                  >
                  </Flex>
                  {photos && (
                    <Flex
                      flexDirection="row"
                      flexWrap="wrap"
                      py="10px"
                    >
                      {photos.map((photo, id) => {
                        return (
                          <VStack key={id}>
                            <Image
                              w="250px"
                              src={photo}
                              alt="work-photo"
                              borderRadius="8px"
                            />
                            <Text
                              color={secondaryTextColour}
                              w="250px"
                            >
                              {captions[id]}
                            </Text>
                          </VStack>
                        );
                      })}
                    </Flex>
                  )}
                </VStack>
              </AccordionPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </Box>
    <div className={styles.topBlur} />
    <div className={styles.bottomBlur} />
    </section>
  );
};

export default Experience;