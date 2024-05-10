
import '@testing-library/jest-dom';


import { render, screen } from "@testing-library/react";
import App from "../App";

test("displays a top-level heading with the text `Hi, I'm _______`", () => {

  render(<App />);

  const topLevelHeading = screen.getByRole("heading", { name: /hi, i'm/i });
  
  expect(topLevelHeading).toBeInTheDocument();
});

test("displays an image with alt text 'Your Name'", () => {
  
  render(<App />);
  
  const image = screen.getByAltText({name});
  
  expect(image).toBeInTheDocument();
});

test("displays a second-level heading with the text 'About Me'", () => {
  
  render(<App />);
  
  const secondLevelHeading = screen.getByRole("heading", { name: /about me/i, level: 2 });
  
  expect(secondLevelHeading).toBeInTheDocument();
});
test('renders biography paragraph', () => {
  const { getByText } = render(<App />);
  const bioParagraph = getByText("I am currently a student in Moringa school, aspiring to be a competent Back-end Developer");

  expect(bioParagraph).toBeInTheDocument();
});


test("displays a link to GitHub", () => {
  
  render(<App />);

  const githubLink = screen.getByRole("link", { name: /github/i });
  
  expect(githubLink).toBeInTheDocument();
  expect(githubLink).toHaveAttribute("href", "https://github.com/yourusername");
});

test("displays a link to LinkedIn", () => {
  
  render(<App />);
  
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });
  
  expect(linkedinLink).toBeInTheDocument();
  expect(linkedinLink).toHaveAttribute("href", "https://linkedin.com/in/yourusername");
});
