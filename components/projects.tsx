"use client"

import { useState, useEffect, useRef, useMemo } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, Calendar, Users, Link as LinkIcon } from "lucide-react"

const projects = [
  {
    title: "Extensive ML Coursework Project",
    description:
      "End-to-end machine learning project for employee churn classification, employee income regression, and segmentation clustering. Achieved top ranks in faculty Kaggle competitions.",
    fullDescription:
      `This thorough machine learning project was developed as part of the Artificial Intelligence & Fundamentals of Data Science coursework, involving predictive modeling across three distinct analytical tasks: customer churn classification, employee monthly income regression, and employee segmentation clustering. Working with complex datasets requiring extensive preprocessing and feature engineering, I implemented multiple algorithms and ensemble methods to achieve optimal performance. The classification model utilized RandomUnderSampler with GradientBoosting and SMOTE with RandomForest ensemble to effectively handle severe class imbalance in the churn prediction dataset. For monthly income regression analysis, XGBoost delivered superior performance through careful hyperparameter tuning and feature selection. The clustering component employed AgglomerativeClustering combined with PCA for dimensionality reduction to identify meaningful employee segments and behavioral patterns within the workforce data.`,
    image: "/project/tk_1.jpg",
    images: ["/project/tk_1.jpg", "/project/tk_2.jpg", "/project/tk_3.jpg"],
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib/Seaborn",
      "Imbalanced-learn",
      "Kaggle",
      "Optuna",
    ],
    category: ["Data Scientist", "Data Analyst"],
    githubUrl: "https://colab.research.google.com/drive/13BqwXP8lKmho6iUFup8MqUMPVo3nwQZ3?usp=sharing",
    challenges: [
      "Managing severe class imbalance in churn prediction dataset affecting model performance",
      "Identifying and selecting optimal features through robust feature engineering",
      "Implementing effective dimensionality reduction while preserving clustering quality",
    ],
    outcomes: [
      "Secured 1st place in faculty's internal Kaggle competition for regression with R² score of 0.82527 using XGBoost",
      "Achieved F1 Score of 0.74165 for churn classification, ranking 3rd in faculty's internal Kaggle competition",
      "Applied end-to-end machine learning pipeline from EDA to model evaluation",
    ],
  },
  {
    title: "Sales Dashboard Project",
    description:
      "Comprehensive dashboard project using Google Looker Studio for sales and shipping analytics, featuring advanced interactive controls and business insights.",
    fullDescription:
      `This business intelligence project was developed as part of coursework, focusing on creating a robust store dashboard using Google Looker Studio to provide actionable insights for retail operations. The dashboard features two main sections: Sales Overview and Ship Performance, each designed to address specific analytical requirements and demonstrate advanced dashboard capabilities. The Sales Overview section includes detailed analysis of sales by segment, monthly sales trends, revenue patterns, and customer behavior metrics. The Ship Performance section analyzes average delivery time by shipping category, tracks on-time versus overtime delivery performance, and provides location-based shipping analytics to identify regional delivery patterns. I implemented advanced dashboard features including calculated fields for custom metrics, data grouping and categorization for better analysis, and interactive controls with drill-down capabilities to enable users to explore data at different granular levels.`,
    image: "/project/db_1.jpg",
    images: ["/project/db_1.jpg", "/project/db_2.jpg"],
    technologies: [
      "Google Looker Studio",
      "Google Sheets",
    ],
    category: ["Data Analyst"],
    githubUrl: "https://lookerstudio.google.com/reporting/f31f4a57-d743-4f71-bea2-37f75433edcb",
    challenges: [
      "Designing intuitive navigation between Sales Overview and Ship Performance sections",
      "Creating meaningful calculated fields and custom metrics for business insights",
      "Implementing effective data grouping and categorization strategies",
    ],
    outcomes: [
      "Developed detailed two-page dashboard covering sales and shipping analytics",
      "Implemented advanced interactive features including filters, controls, and drill actions",
    ],
  },
  {
    title: "DewanSpace Freelancer Management Platform",
    description:
      "Full-stack web application for freelancer management, including user authentication, project tracking, and responsive UI. Delivered for PT Dewanstudio.",
    fullDescription:
      `This full-stack web development project involved creating DewanSpace, a robust freelancer management platform for PT Dewanstudio. As the fullstack developer, I was responsible for both backend and frontend development, delivering a complete solution that streamlines freelancer operations and project management. The platform features robust user authentication, extensive project tracking, and intuitive user interfaces designed to enhance the freelancer-client interaction experience. I developed and maintained over 30 RESTful API endpoints with exceptional reliability, implemented secure data handling practices, and created responsive user interfaces that adapt seamlessly across different devices. The project utilized modern development practices including containerization, cloud deployment, and thorough API testing to ensure scalability and maintainability.`,
    image: "/project/snans_1.jpg",
    images: ["/project/snans_1.jpg", "/project/snans_2.jpg", "/project/snans_3.jpg"],
    technologies: [
      "Java",
      "Spring Boot",
      "React.js",
      "Google Cloud Platform (GCP)",
      "Docker",
      "Vercel",
      "Postman",
      "DBeaver",
      "RESTful APIs",
      "Database Design",
    ],
    category: ["Developer"],
    githubUrl: null,
    challenges: [
      "Designing and implementing secure authentication system for protecting sensitive user data",
      "Creating scalable database schema and relationships for complex freelancer management workflows",
      "Ensuring high availability and performance across 30+ API endpoints with minimal downtime",
    ],
    outcomes: [
      "Successfully delivered complete freelancer management platform with full-stack capabilities",
    ],
  },
  {
    title: "Tourism Recommendation System",
    description:
      "Machine learning project for intelligent tourism recommendation, leveraging NLP, clustering, and geospatial analysis to enhance destination discovery.",
    fullDescription:
      `This machine learning project was developed during my role as ML Engineer at Infinite Learning, focusing on creating an intelligent tourism recommendation system to enhance user experience in destination discovery. The system leverages advanced natural language processing, clustering techniques, and geospatial analysis to provide personalized travel recommendations based on user preferences, historical data patterns, and geographical proximity. I implemented TF-IDF vectorization for text feature extraction from tourism descriptions, utilized cosine similarity algorithms for measuring destination compatibility, applied K-means clustering to group similar attractions and experiences, and integrated distance calculations using latitude and longitude coordinates for location-based recommendations. The project involved extensive data preprocessing, model development, performance optimization, and deployment pipeline setup to ensure scalable and reliable recommendation delivery for end users.`,
    image: "/project/rekomendasi_1.jpg",
    images: ["/project/rekomendasi_1.jpg", "/project/rekomendasi_2.jpg"],
    technologies: [
      "Python",
      "Scikit-learn",
      "TF-IDF Vectorization",
      "K-means Clustering",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Flask",
      "Cosine Similarity",
      "Machine Learning",
    ],
    category: ["Data Scientist", "ML Engineer"],
    githubUrl: "https://github.com/ScudettoCiano/Reccomendation_system",
    challenges: [
      "Designing a hybrid recommendation system that balances content-based, collaborative, and rule-based approaches",
      "Handling diverse user preferences and incomplete data for new users (cold start problem)",
      "Implementing accurate geolocation-based scoring using the Haversine formula to account for real-world distance between users city and destinations",
    ],
    outcomes: [
      "Successfully developed tourism recommendation system using advanced ML algorithms and NLP techniques",
    ],
  },
  {
    title: "Intelligent Tourism Chatbot",
    description:
      "Conversational AI chatbot for tourism, leveraging BERT transformers and NLP to provide contextual responses for travel-related inquiries.",
    fullDescription:
      `This machine learning project was developed during my role as ML Engineer at Infinite Learning, focusing on creating an intelligent conversational AI chatbot to enhance customer service and user interaction for tourism-related inquiries. The system leverages advanced transformer architecture and natural language understanding to provide accurate, contextual responses to diverse user queries about travel destinations, recommendations, and general tourism information. I implemented BERT (Bidirectional Encoder Representations from Transformers) models for natural language processing, enabling the chatbot to understand context, intent, and sentiment in user conversations. The project involved thorough training data preparation, model fine-tuning, response optimization, and deployment pipeline setup to ensure reliable and engaging conversational experiences for end users across multiple tourism inquiry categories.`,
    image: "/project/chatbot_1.jpg",
    images: ["/project/chatbot_1.jpg"],
    technologies: [
      "Python",
      "BERT/Transformers",
      "TensorFlow/PyTorch",
      "Hugging Face",
      "Natural Language Processing",
      "Flask",
      "Pandas",
      "NumPy",
      "Tokenization",
      "Deep Learning",
    ],
    category: ["ML Engineer", "Data Scientist"],
    githubUrl: "https://github.com/ScudettoCiano/chatbot",
    challenges: [
      "Fine-tuning BERT models for domain-specific tourism vocabulary and contextual understanding",
      "Processing and preparing diverse conversational training data for optimal model performance",
      "Implementing efficient response generation while maintaining contextual accuracy and relevance",
    ],
    outcomes: [
      "Successfully developed intelligent chatbot system using state-of-the-art BERT transformer architecture",
    ],
  },
  {
    title: "Business Campaign Analytics Project",
    description:
      "In-depth analytics project for evaluating 50+ Facebook campaigns for the Prabowo-Gibran National Campaign Team, with actionable insights and strategic recommendations.",
    fullDescription:
      `This data analytics project was developed as part of Digital Marketing coursework, involving thorough performance evaluation of digital marketing campaigns for the Prabowo-Gibran National Campaign Team (TKN) leading up to the 2024 Indonesian Presidential Election. As part of the digital marketing division analysis, I evaluated 50+ Facebook advertising campaigns with various objectives including profile visits, WhatsApp engagement, and website traffic direction. The project required in-depth data analysis using statistical methods and visualization techniques to evaluate campaign effectiveness against established Key Performance Indicators (KPIs). I performed extensive data cleaning and preprocessing, created detailed visualizations to identify performance patterns, and developed actionable recommendations based on data-driven insights within the socio-political context. The final deliverable was a complete performance evaluation report with strategic recommendations for the campaign's closing phase, combining quantitative analysis with contextual understanding of the political landscape.`,
    image: "/project/pmd_1.jpg",
    images: ["/project/pmd_1.jpg", "/project/pmd_2.jpg", "/project/pmd_3.jpg"],
    technologies: [
      "Python",
      "Jupyter Notebook",
      "Google Sheets",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
    ],
    category: ["Data Analyst"],
    githubUrl: "https://docs.google.com/document/d/1Ny6ZuCCJrEmHalNrtn5rx-aNz5L6EKldhO7O8PesuOI/edit?usp=sharing",
    challenges: [
      "Cleaning and preprocessing campaign data with inconsistent formats and missing values",
      "Analyzing 50+ campaigns across multiple objectives and performance metrics simultaneously",
      "Creating meaningful visualizations to support data analysis and interpretation",
    ],
    outcomes: [
      "Delivered thorough campaign performance evaluation report with actionable strategic recommendations",
      "Provided data-driven insights combining quantitative analysis with socio-political context for enhanced decision-making",
    ],
  },
  {
    title: "Pacilflix: Django-Based Movie Streaming Platform",
    description:
      "Web application for movie streaming and user interaction, built with Django, PostgreSQL, and modular app architecture to support authentication, reviews, favorites, and more.",
    fullDescription:
      `Pacilflix is a robust web-based movie streaming platform developed as a collaborative project, designed to provide users with a seamless experience in browsing, reviewing, and managing their favorite movies. Built using the Django framework, the system features modular apps for authentication, user reviews, favorites, downloads, and subscription management. I contributed to the backend development, database modeling, and integration of various Django apps, ensuring robust user authentication, secure session management, and efficient handling of user-generated content. The project leverages PostgreSQL for data storage, Gunicorn and Whitenoise for production deployment, and follows best practices in Django app structuring and migration management. My responsibilities included implementing RESTful endpoints, optimizing database queries, and maintaining code quality through version control and collaborative workflows. The platform is designed for scalability and maintainability, supporting future feature expansion and deployment to cloud platforms.`,
    image: "/project/basdad_1.jpg",
    images: ["/project/basdad_1.jpg", "/project/basdad_2.jpg"],
    technologies: [
      "Python",
      "Django",
      "PostgreSQL",
      "Gunicorn",
      "Whitenoise",
      "HTML",
      "CSS",
      "JavaScript",
      "REST API",
      "Git"
    ],
    category: ["Developer"],
    githubUrl: "https://github.com/BASDAT-B4/Pacilflix-B4",
    challenges: [
      "Designing a modular Django project structure to support multiple independent apps (authentication, reviews, favorites, etc.)",
      "Ensuring secure user authentication and session management",
      "Managing database migrations and schema changes collaboratively in a team environment"
    ],
    outcomes: [
      "Successfully developed and deployed a scalable movie streaming platform with robust user management and interactive features"
    ],
  },
  {
    title: "AI & Data Science Laboratory Series",
    description:
      "8-session lab series covering fundamental to advanced machine learning, with deep focus on mathematical and algorithmic understanding.",
    fullDescription:
      `This laboratory series was completed as part of the Artificial Intelligence & Fundamentals of Data Science coursework, consisting of 8 intensive lab sessions covering fundamental to advanced machine learning concepts and implementations. The laboratory work went beyond simple library usage, focusing on understanding the mathematical foundations, algorithmic mechanics, and theoretical principles behind each technique. The curriculum covered data manipulation with Pandas and NumPy, exploratory data analysis, advanced data visualization techniques, detailed preprocessing methods, dimensionality reduction using PCA, supervised learning algorithms including decision trees, random forests, naive Bayes, and k-nearest neighbors. Additionally, I explored various regression techniques (linear, ridge, lasso), tackled imbalanced classification problems using SMOTE, Tomek links, and NearMiss sampling methods, implemented neural networks from theoretical foundations, and applied clustering algorithms including K-means and agglomerative clustering with deep mathematical understanding.`,
    image: "/project/lab_1.jpg",
    images: ["/project/lab_1.jpg", "/project/lab_2.jpg", "/project/lab_3.jpg"],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "Jupyter Notebook"
    ],
    category: ["Data Analyst", "Data Scientist"],
    githubUrl: "https://github.com/ScudettoCiano/Lab",
    challenges: [
      "Understanding and implementing mathematical foundations behind machine learning algorithms rather than using black-box solutions",
      "Analyzing complex imbalanced classification techniques and their impact on model evaluation metrics",
      "Comprehending the underlying mechanics of neural networks and clustering algorithms through mathematical derivations"
    ],
    outcomes: [
      "Achieved final score of 100 for the laboratory coursework demonstrating mastery of both theoretical concepts and practical implementations",
      "Successfully completed 8 intensive laboratory sessions covering the full spectrum of data science fundamentals"
    ],
  },
  {
    title: "APAP Medika - Hospital Management System",
    description:
      "Comprehensive hospital management system for patient hospitalization, room booking, and facility management with web interface and REST API.",
    fullDescription:
      `This full-stack web application was developed during my role as a Software Engineer, focusing on creating a comprehensive hospital management system to streamline patient hospitalization processes and improve healthcare facility operations. The system provides an integrated platform for managing patient reservations, room assignments, medical facilities, and healthcare staff coordination. I implemented a robust Spring Boot backend with RESTful APIs, PostgreSQL database integration, and a responsive web interface using Thymeleaf templates. The project involved designing complex data models for reservations, rooms, and facilities, implementing secure authentication and authorization, and creating an intuitive user interface for healthcare administrators.`,
    image: "/project/apap.jpg",
    images: ["/project/apap.jpg"],
    technologies: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "PostgreSQL",
      "Thymeleaf",
      "RESTful APIs",
      "Hibernate",
      "Maven/Gradle",
      "HTML/CSS/JavaScript",
      "Bootstrap",
      "JWT Authentication",
      "Lombok",
      "JavaFaker"
    ],
    category: ["Developer"],
    githubUrl: "https://github.com/ScudettoCiano/apapmedika",
    challenges: [
      "Implementing secure authentication and authorization for healthcare data access and management",
      "Creating an intuitive user interface for healthcare administrators with proper form validation and error handling",
      "Integrating multiple data sources and ensuring consistent data synchronization across the system"
    ],
    outcomes: [
      "Implemented secure healthcare data management with proper authentication and authorization",
      "Created responsive web interface for efficient healthcare facility operations"
    ],
  },
  {
    title: "Employee Turnover & Retention Analytics",
    description:
      "Data analytics project for employee turnover and retention analysis using interactive dashboard with comprehensive data preprocessing and stakeholder-driven insights.",
    fullDescription:
      `This data analytics internship project was completed at PT Madhava Persada Group, focusing on employee turnover and retention analysis to support strategic human resources decision-making. My role involved conducting thorough business understanding sessions with stakeholders to identify key requirements and success metrics, followed by extensive data exploration and analysis of employee records. I performed detailed data preprocessing including comprehensive data cleaning, validation, and transformation processes to ensure data quality and reliability. The primary deliverable was an interactive dashboard system specifically designed to analyze employee turnover and retention patterns, featuring two main pages with diverse visualizations tailored to stakeholder specifications. The dashboard incorporated various metrics and dimensions to provide actionable insights for executive decision-making and strategic workforce planning.`,
    image: "/project/madhava.jpg",
    images: ["/project/madhava.jpg"],
    technologies: [
      "Google Looker Studio",
      "Google Sheets"
    ],
    category: ["Data Analyst"],
    githubUrl: null,
    challenges: [
      "Identifying and understanding complex business requirements from multiple stakeholders with varying analytical needs",
      "Processing and cleaning extensive employee datasets with inconsistent formatting and missing critical information",
      "Designing intuitive dashboard interfaces that effectively communicate turnover patterns to executive-level stakeholders"
    ],
    outcomes: [
      "Built 2-page interactive dashboard featuring 10+ dynamic visualizations tailored for executive stakeholders"
    ],
  },
]

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [isVisible, setIsVisible] = useState(false)
  const [visibleProjects, setVisibleProjects] = useState<number[]>([])
  const sectionRef = useRef<HTMLElement>(null)
  const [cardImageIndexes, setCardImageIndexes] = useState<number[]>(projects.map(() => 0));

  const filters = ["All", "Data Scientist", "Data Analyst", "Developer", "ML Engineer"]

  const filteredProjects = useMemo(() => {
    return activeFilter === "All"
      ? projects
      : projects.filter((project) =>
          Array.isArray(project.category)
            ? project.category.includes(activeFilter)
            : project.category === activeFilter
        );
  }, [activeFilter]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  useEffect(() => {
    // Reset and animate projects when filteredProjects changes
    setVisibleProjects([])
    filteredProjects.forEach((_, index) => {
      setTimeout(() => {
        setVisibleProjects((prev) => [...prev, index])
      }, index * 150)
    })
  }, [filteredProjects])

  useEffect(() => {
    const interval = setInterval(() => {
      setCardImageIndexes((prev) =>
        prev.map((idx, i) => {
          const imgs = projects[i].images || [projects[i].image];
          return (idx + 1) % imgs.length;
        })
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section id="projects" className="py-16 sm:py-20 bg-slate-900" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Featured Projects
          </h2>
          <p
            className={`text-slate-400 text-center mb-12 sm:mb-16 text-base sm:text-lg transition-all duration-1000 delay-200 px-4 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A showcase of my work and technical expertise
          </p>

          {/* Filter Buttons */}
          <div
            className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {["All", "Data Scientist", "Data Analyst", "Developer", "ML Engineer"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className={`text-xs sm:text-sm px-3 sm:px-4 py-2 ${
                  activeFilter === filter
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0"
                    : "bg-slate-800/50 text-slate-300 border-slate-600 hover:border-slate-500 hover:text-white"
                } transition-all duration-300`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {filteredProjects.map((project, index) => (
              <Card
                key={index}
                className={`bg-slate-800/50 border-slate-700 hover:border-slate-600 transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/10 backdrop-blur-sm hover:scale-105 group cursor-pointer ${
                  visibleProjects.includes(index) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${800 + index * 200}ms` }}
              >
                <CardHeader className="p-4 sm:p-6">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-slate-700/50 text-slate-300 border-slate-600 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="bg-slate-700/50 text-slate-300 border-slate-600 text-xs">
                        +{project.technologies.length - 4}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-slate-700/50 text-slate-300 border-slate-600 hover:border-slate-500 hover:text-white text-xs sm:text-sm"
                        >
                          <LinkIcon className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-800 border-slate-700">
                        <DialogHeader>
                          <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
                            {project.title}
                          </DialogTitle>
                        </DialogHeader>
                        <div className="space-y-6">
                          <ProjectImageCarousel images={project.images} title={project.title} />
                          <div>
                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Description</h4>
                            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                              {project.fullDescription}
                            </p>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Challenges</h4>
                            <ul className="space-y-2">
                              {project.challenges.map((challenge, chIndex) => (
                                <li key={chIndex} className="text-slate-300 flex items-start text-xs sm:text-sm">
                                  <span className="text-blue-400 mr-2 mt-1">▸</span>
                                  {challenge}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Outcomes</h4>
                            <ul className="space-y-2">
                              {project.outcomes.map((outcome, outIndex) => (
                                <li key={outIndex} className="text-slate-300 flex items-start text-xs sm:text-sm">
                                  <span className="text-green-400 mr-2 mt-1">▸</span>
                                  {outcome}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="text-white font-semibold mb-3 text-sm sm:text-base">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech, techIndex) => (
                                <Badge
                                  key={techIndex}
                                  variant="outline"
                                  className="bg-slate-700/50 text-slate-300 border-slate-600 text-xs"
                                >
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          {project.githubUrl && (
                            <div className="flex justify-center">
                              <Button
                                onClick={() => window.open(project.githubUrl, "_blank")}
                                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 text-sm sm:text-base"
                              >
                                <Github className="mr-2 h-4 w-4" />
                                View Project
                              </Button>
                            </div>
                          )}
                        </div>
                      </DialogContent>
                    </Dialog>
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                        className="bg-slate-700/50 text-slate-300 border-slate-600 hover:border-slate-500 hover:text-white text-xs sm:text-sm"
                      >
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        Code
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ProjectImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  return (
    <div className="relative flex items-center justify-center mb-4">
      <button
        onClick={prev}
        className="absolute left-0 z-10 bg-slate-700/60 hover:bg-slate-700 text-white rounded-full p-2 top-1/2 -translate-y-1/2"
        aria-label="Previous image"
        style={{ minWidth: 32 }}
      >
        &#8592;
      </button>
      <img
        src={images[idx]}
        alt={title + ' screenshot ' + (idx + 1)}
        className="w-full h-[28rem] object-cover rounded-lg mx-8"
      />
      <button
        onClick={next}
        className="absolute right-0 z-10 bg-slate-700/60 hover:bg-slate-700 text-white rounded-full p-2 top-1/2 -translate-y-1/2"
        aria-label="Next image"
        style={{ minWidth: 32 }}
      >
        &#8594;
      </button>
      <Badge className="absolute top-4 left-4 bg-blue-600 text-white">{title}</Badge>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
        {images.map((_, i) => (
          <span key={i} className={`inline-block w-2 h-2 rounded-full ${i === idx ? 'bg-blue-400' : 'bg-slate-500'}`}></span>
        ))}
      </div>
    </div>
  );
}
