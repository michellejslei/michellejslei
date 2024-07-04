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
  import styles from "./Projects.module.css";
  import { getImageUrl } from '../../utils';
  
  const projects = [
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
      title: 'StudyGuard [BCS Hackathon]',
      location: 'Mar - Apr 2024',
      link: '',
      description: [
        'Created a web ML study buddy to process TensorFlow pose detection data via webcam and send audio alerts when a user is engaged in a ‘distracted’ pose during a study session',
        'Implemented virtual study room servers using Socket.IO that send real-time alerts when distractions occur',
      ],
      logo: getImageUrl("logos/studyguard.png"),
      photos: [],
      captions: [
        '',
      ],
    },
    {
      title: 'Swipe Bright [cmd-f Hackathon]',
      location: 'Mar 2024 - present',
      link: '',
      description: [
        'Developed a peer tutoring web app that allows users to match, study, and learn with peers in the same classes',
        'Implemented a scalable back-end using Node.js and MongoDB to manage user authentication, user data for the matching algorithm, and real-time chat history',
        'Elevated user engagement by integrating an intuitive ‘swipe-to-match’ user interface through React.js',
        'UBC CS Project Hub Winner',
      ],
      logo: getImageUrl("logos/swipebright.png"),
      photos: [],
      captions: [],
    },
    {
      title: 'SyllaSync',
      location: 'Feb 2024 - present',
      link: '',
      description: [
        'Developed a fully CI/CD web application using AWS services where users can upload syllabus/assignment PDFs and keep track of deadlines as the dates will be extracted and displayed',
        'Implemented back-end using Python to extract text from uploaded PDFs and developed regex patterns to accurately identify and segregate dates and associated assignment details from the syllabus content',
        'Created a user-friendly interface using Flask to facilitate file uploads',
      ],
      logo: getImageUrl("logos/deadline.png"),
    },
    {
      title: 'Restaurant Tracker',
      location: 'Sep - Dec 2023',
      link: '',
      description: [
        'Created a desktop app to track and rate restaurants with features like notes, favourite dishes, and advanced filtering',
        'Utilized UML for project design and applied OOP for efficient logic development',
      ],
      logo: getImageUrl("logos/restaurant.png"),
    },
    {
      title: 'Flight Bot [ChatHacks]',
      location: 'Apr - May 2023',
      link: '',
      description: [
        'Collaborated within a team of 4 to develop an NLP chatbot to provide users with personalized flight recommendations, using Dialogflow CX to facilitate natural and engaging user interactions',
        'Best use of Google Cloud Winner',
      ],
      logo: getImageUrl("logos/chat.png"),
    },
    {
      title: 'Characterization of Bodily Pain and Use of Prescription and Non-Prescription Opioids in Tenants of Precarious Housing',
      location: 'Sep 2019 - Aug 2021',
      link: '',
      description: [
        'First author publication in Substance Use & Misuse Journal. DOI: 10.1080/10826084.2021.1958865',
      ],
      logo: getImageUrl("logos/painkiller.png"),
    },
  ];
  
  const Projects = ({ id }) => {
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
      <section className={styles.container} id="projects">
      <h2 className={styles.title}># projects</h2>
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
          {projects.map((project, id) => {
            const { title, location, link, description, logo } = project;
            const photos = project?.photos;
            const captions = project?.captions;
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
                      // fontSize="16.5px"
                      letterSpacing={'1.05px'}
                      fontSize="18px"
                      px="10px"
                      className={styles.jobTitle}
                    >
                      <Image
                        mr="30px"
                        w="80px"
                        src={logo}
                        alt="company-logo"
                      />
                      {/* <Text style={{ fontFamily: 'HagridRegular, sans-serif', color: 'black' }}>{title}</Text> */}
                      <Text style={{ color: 'black' }}>{title}</Text>
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
                      color="black"
                      letterSpacing={'1.05px'}
                      // style={{ fontFamily: 'Raleway, sans-serif' }}
                      className={styles.location}
                    >
                      {location}
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
                            // style={{ fontFamily: 'Raleway, sans-serif' }}
                            color="black"
                            letterSpacing={'1.35px'}
                            key={id}
                            className={styles.description}
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
  
  export default Projects;