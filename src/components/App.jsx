import Feedback from "./feedback/Feedback";
import Section from "./feedback/Section";
export const App = () => {
  return (
   <>
   <Section 
title="Please leave feedback"><Feedback /></Section>
    
    <Section 
        title="Statistics"></Section>
   </>
  );
};
