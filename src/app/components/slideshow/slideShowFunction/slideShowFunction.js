// story.js
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const StoryContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ProgressBarContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 5px;
  width: 100%;
  display: flex;
`;

const ProgressBarSegment = styled.div`
  height: 5px;
  flex: 1;
  margin-right: 3px;
  background-color: ${(props) => (props.filled ? '#fff' : '#888')};
  transition: background-color 0.5s ease;

  &:last-child {
    margin-right: 0;
  }

  &::after {
    content: '';
    display: ${(props) => (props.currentProgress !== undefined ? 'block' : 'none')};
    height: 5px;
    background-color: #fff;
    width: ${(props) => props.currentProgress || 0}%;
    transition: width linear;
  }
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 90%;
`;

const Story = ({ images, renaissanceImages }) => {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const imageDisplayDuration = 8000;

  useEffect(() => {
    const intervalTime = 50;
    const increment = (intervalTime / imageDisplayDuration) * 100;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setIndex((oldIndex) => (oldIndex + 1) % images.length);
          return 0;
        }
        return oldProgress + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [index, images.length]);

  const handleClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
    setProgress(0);
  };



  return (
    <StoryContainer onClick={handleClick}>
      <ProgressBarContainer>
        {images.map((_, idx) => (
          <ProgressBarSegment
            key={idx}
            filled={idx < index}
            currentProgress={idx === index ? progress : undefined}
          />
        ))}
      </ProgressBarContainer>
      <Image src={images[index]} alt={`Story ${index}`} />
    </StoryContainer>
  );
};

export default Story;
