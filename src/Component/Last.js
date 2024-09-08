import React from 'react';
import './Last.css';
const Card = ({ title, description, time, status, buttonText, imageSrc }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <div className="card-header">
          <div className="status-tag">{status}</div>
          <h3>{title}</h3>
        </div>
        <p>{description}</p>
        <div className="card-time">{time}</div>
        <button className="primary-button">{buttonText}</button>
      </div>
    </div>
  );
};

const Last = () => {
  const data = [
    {
      title: 'Data Science Bootcamp - Graded Datathon',
      description: 'Join the Data Science Bootcamp and test your skills in a graded Datathon.',
      time: 'Starts in 00 : 15 : 22',
      status: 'Upcoming',
      buttonText: 'Participate Now',
      imageSrc: 'https://images.unsplash.com/photo-1553129000-124195250542?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      title: 'Data Sprint 72 - Butterfly Identification',
      description: 'Test your image classification skills with our Data Sprint on butterfly identification.',
      time: 'Starts in 00 : 12 : 34',
      status: 'Upcoming',
      buttonText: 'Participate Now',
      imageSrc: 'https://images.unsplash.com/photo-1536703501797-0041773979fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      title: 'Data Sprint 71 - Weather Recognition',
      description: 'Train a model to predict the weather based on visual cues.',
      time: 'Ends in 01 : 17 : 10',
      status: 'Active',
      buttonText: 'Participate Now',
      imageSrc: 'https://images.unsplash.com/photo-1547814542-3468876836d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      title: 'Data Sprint 70-Airline Passenger Satisfaction',
      description: 'Analyze data to understand customer satisfaction in the airline industry.',
      time: 'Ends in 00 : 11 : 27',
      status: 'Active',
      buttonText: 'Participate Now',
      imageSrc: 'https://images.unsplash.com/photo-1505578877279-d9761476764f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      title: 'Engineering Graduates Employment Outcomes',
      description: 'Explore the career paths and outcomes of engineering graduates.',
      time: 'Ended on 16th May’22 09:00 PM',
      status: 'Past',
      buttonText: 'Participate Now',
      imageSrc: 'https://images.unsplash.com/photo-1506749668952-9910594605b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    },
    {
      title: 'Travel Insurance Claim Prediction',
      description: 'Develop a model to predict the likelihood of travel insurance claims.',
      time: 'Ended on 16th May 22 09:00 PM',
      status: 'Past',
      buttonText: 'Participate Now',
      imageSrc: 'https://images.unsplash.com/photo-1550186787-04d8676738e6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
    }
  ];

  return (
    <div className="container">
      {data.map((item, index) => (
        <Card key={index} {...item} />
      ))}
    </div>
  );
};

export default Last;
