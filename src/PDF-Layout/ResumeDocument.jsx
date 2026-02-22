import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 28,
    paddingHorizontal: 50,
  },
  headerContainer: {
    display: "flex",
    alignItems: "center"
  },
  header: {
    fontSize: 30,
    fontWeight: "extrabold",
    color: '#2e74b5'
  },
  headerP: {
    fontSize: 11,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "extrabold",
    color: '#2e74b5',
    marginTop: 16,
  },
  textBold: {
    fontSize: 11,
    color: '#000000',
    fontWeight: "extrabold"
  },
  text: {
    fontSize: 11,
    color: '#000000',
  },
  horizontalLine: {
    height: 1,
    backgroundColor: '#000000',
    marginVertical: 2,
  },
  list: {
    paddingLeft: 20,
    marginVertical: 5,
  },
  listItem: {
    fontSize: 11,
    color: '#000000',
    marginBottom: 4,
  },
});

const List = ({ children }) => (
  <View style={styles.list}>{children}</View>
);

const ListItem = ({ text }) => (
  <View style={{ flexDirection: "row" }}>
    <Text style={styles.listItem}>• </Text>
    <Text style={styles.listItem}>{text}</Text>
  </View>
);

const ResumeDocument = () => (
  <Document>
    <Page style={styles.page} size="A4">
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>JOHN SIGFRIDO MAUR</Text>
          <Text style={styles.headerP}>
            Taguig, Arago st. 1631 • 099242717174
            <Text> • johnmaur8@gmail.com</Text>
          </Text>
          <Text style={styles.headerP}>www.linkedin.com/in/john-maur-04b770307</Text>
        </View>

        <Text style={styles.sectionTitle}>OBJECTIVE</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.text}>Seeking a challenging position in the programming industry where I can utilize my technical skills in React, React Native, and Node.js to build mobile and web applications.</Text>

        <Text style={styles.sectionTitle}>WORK EXPERIENCE</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.textBold}>
          The Peak Tower - <Text style={{ fontWeight: "normal" }}>Liveste Street, Makati City                                                         May 2023 - August 2023</Text>
        </Text>
        <Text style={styles.textBold}>Customer Service - Proctor</Text>
        <Text style={styles.text}>Responsible for launching exams for test takers while ensuring quality service.</Text>
        <List>
          <ListItem text="Provided clear and concise instructions to test takers, ensuring they understood the exam process." />
          <ListItem text="Addressed and resolved any technical or procedural issues that arose during exams." />
          <ListItem text="Handled two test takers at once while providing consistent and attentive service." />
          <ListItem text="Monitored up to 10 test takers during their exams to ensure compliance with exam protocols." />
        </List>
        <View style={{ marginBottom: 8 }} />

        <View style={styles.horizontalLine} />
        <Text style={styles.textBold}>
          TSD GLOBAL - <Text style={{ fontWeight: "normal" }}>4F 8/10 Mckinley hill Cyberpunk	                                   January 2025 - February 2026</Text>
        </Text>
        <Text style={styles.textBold}>Customer Service - Sales Support</Text>
        <Text style={styles.text}>Responsible for tracking orders through completion while ensuring reliable and efficient service.</Text>
        <List>
          <ListItem text="Provide support to sales team by taking on support tasks to reduce workload and allow them to focus on closing deal." />
          <ListItem text="Address and resolve issues related to orders, services, or client concerns to maintain high customer satisfaction." />
          <ListItem text="Track, monitor, and follow up on orders to ensure they move smoothly through different services and stages until completion." />
          <ListItem text="Prepare documentation (order status, issue logs, service tracking) to keep management informed." />
        </List>
        <Text style={styles.sectionTitle}>PROFESSIONAL SKILLS</Text>
        <View style={styles.horizontalLine} />
        <List>
          <ListItem text="Proficient working in both front-end and back-end development, with hands-on experience using React, React Native, and Node.js to build dynamic, responsive applications." />
          <ListItem text="Skilled in coding across various programming languages, especially JavaScript." />
          <ListItem text="Experienced in using Git and GitHub for version control and collaborative development." />
          <ListItem text="Experienced in using Tailwind CSS and Bootstrap to create responsive, modern, and visually appealing user interfaces." />
        </List>

        <Text style={styles.sectionTitle}>VOLUNTEER EXPERIENCE</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.textBold}>Student Teacher, Diosdado Macapagal High School, Taguig City</Text>
        <List>
          <ListItem text="Facilitated classroom activities and engaged with students to ensure understanding of lesson materials, demonstrating strong communication skills." />
          <ListItem text="Adapted teaching methods to meet the diverse needs of students, showcasing flexibility and problem-solving abilities." />
          <ListItem text="Provided one-on-one assistance to students who required additional support, demonstrating patience and empathy." />
          <ListItem text="Collaborated with colleagues to develop action research and assess student progress, highlighting teamwork and cooperation." />
          <ListItem text="Effectively managed classroom dynamics and addressed behavioral issues in a calm and professional manner, showcasing conflict resolution skills." />
        </List>

        <View style={{ marginBottom: 8 }} />
        <Text style={styles.sectionTitle}>ACHIEVEMENTS</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.textBold}>Certification:</Text>
        <List>
          <ListItem text="Adobe Certified Professional in Visual Design." />
        </List>

        <Text style={styles.sectionTitle}>EDUCATION</Text>
        <View style={styles.horizontalLine} />
        <Text style={styles.textBold}>
          Technical University of the Philippines - <Text>Taguig Campus</Text>
        </Text>
        <Text style={styles.text}>Bachelor of Technical Vocational Teacher Education major in ICT-Computer Programming</Text>
        <List>
          <ListItem text="Specialized in programming." />
          <ListItem text="Thesis on “MULTI-FUNCTIONAL ACCESS CONTROL AND TRACKING SYSTEM THROUGH RFID-DRIVEN TECHNOLOGY”." />
        </List>
      </View>
    </Page>
  </Document>
);

export default ResumeDocument;
