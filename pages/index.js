import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Heart, ArrowRight, ArrowLeft, Loader, Download, Sparkles } from 'lucide-react';

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [responses, setResponses] = useState({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [profile, setProfile] = useState(null);
  const [userName, setUserName] = useState('');
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    if (currentStep === 1 && !startTime) {
      setStartTime(Date.now());
    }
  }, [currentStep, startTime]);

  const assessmentModules = [
    {
      id: 'enneagram',
      title: 'Your Core Self: Enneagram',
      description: 'Discover the deep motivations and fears that drive you',
      questions: [
        {
          id: 'core_motivation',
          type: 'longtext',
          question: 'What do you most want to be true about yourself? What do you fear most about yourself?',
          placeholder: 'Take your time... there are no wrong answers here.'
        },
        {
          id: 'childhood_message',
          type: 'longtext',
          question: 'What message did you receive as a child about how to be loved or accepted? What did you learn you needed to be?',
          placeholder: 'Reflect on your earliest memories...'
        },
        {
          id: 'type_resonance',
          type: 'multiselect',
          question: 'Which of these core patterns resonate most deeply with you? (Select 2-3)',
          options: [
            { value: 'type1', label: 'I need things to be right and good. I fear being wrong or corrupt.' },
            { value: 'type2', label: 'I need to be needed and loved. I fear being unwanted or unworthy of love.' },
            { value: 'type3', label: 'I need to succeed and be admired. I fear being worthless or failing.' },
            { value: 'type4', label: 'I need to be unique and authentic. I fear being ordinary or without identity.' },
            { value: 'type5', label: 'I need to understand and be capable. I fear being helpless or incompetent.' },
            { value: 'type6', label: 'I need security and support. I fear being without guidance or abandoned.' },
            { value: 'type7', label: 'I need to be happy and avoid pain. I fear being trapped in pain or missing out.' },
            { value: 'type8', label: 'I need to be strong and in control. I fear being weak or controlled by others.' },
            { value: 'type9', label: 'I need peace and harmony. I fear conflict and disconnection.' }
          ]
        },
        {
          id: 'stress_response',
          type: 'longtext',
          question: 'When you\'re stressed or overwhelmed, how do you change? What patterns emerge?',
          placeholder: 'Describe how you behave when things get difficult...'
        },
        {
          id: 'growth_direction',
          type: 'longtext',
          question: 'When you\'re at your best, most integrated self - what qualities emerge? How are you different?',
          placeholder: 'Think about moments when you felt most aligned...'
        }
      ]
    },
    {
      id: 'attachment',
      title: 'Your Attachment Pattern',
      description: 'How you bond, connect, and navigate intimacy',
      questions: [
        {
          id: 'early_relationships',
          type: 'longtext',
          question: 'Describe your earliest relationship with your primary caregivers. How did they respond to your needs?',
          placeholder: 'What did you learn about closeness and independence?'
        },
        {
          id: 'intimacy_comfort',
          type: 'scale',
          question: 'How comfortable are you with deep emotional intimacy?',
          min: 1,
          max: 10,
          minLabel: 'Very uncomfortable, prefer distance',
          maxLabel: 'Completely comfortable, crave closeness'
        },
        {
          id: 'relationship_fears',
          type: 'multiselect',
          question: 'What fears come up for you in relationships? (Select all that apply)',
          options: [
            { value: 'abandonment', label: 'Fear of being abandoned or left behind' },
            { value: 'engulfment', label: 'Fear of losing myself or being consumed' },
            { value: 'rejection', label: 'Fear of rejection or not being enough' },
            { value: 'vulnerability', label: 'Fear of being too vulnerable or exposed' },
            { value: 'dependence', label: 'Fear of becoming too dependent' },
            { value: 'conflict', label: 'Fear of conflict destroying the relationship' }
          ]
        },
        {
          id: 'conflict_response',
          type: 'longtext',
          question: 'When conflict arises in your relationship, what\'s your instinctive response? Do you move toward, away from, or against your partner?',
          placeholder: 'Be honest about your first impulse...'
        },
        {
          id: 'reassurance_needs',
          type: 'longtext',
          question: 'What do you need from your partner to feel secure? How do you know you\'re loved?',
          placeholder: 'What actions, words, or presence matter most?'
        }
      ]
    },
    {
      id: 'communication',
      title: 'How You Communicate',
      description: 'Your patterns of expressing and receiving',
      questions: [
        {
          id: 'expression_style',
          type: 'choice',
          question: 'When you have something important to share, you tend to:',
          options: [
            { value: 'direct', label: 'Say it directly and clearly, even if it\'s difficult' },
            { value: 'indirect', label: 'Hint or suggest, hoping they\'ll pick up on it' },
            { value: 'wait', label: 'Wait for the perfect moment, which may never come' },
            { value: 'process', label: 'Need to process internally before sharing' }
          ]
        },
        {
          id: 'listening_blocks',
          type: 'multiselect',
          question: 'What gets in the way of you truly hearing your partner? (Select all that apply)',
          options: [
            { value: 'formulating', label: 'Formulating my response while they talk' },
            { value: 'defensive', label: 'Getting defensive or preparing my defense' },
            { value: 'fixing', label: 'Jumping to fix rather than understand' },
            { value: 'dismissing', label: 'Minimizing their feelings or concerns' },
            { value: 'retreating', label: 'Shutting down when emotions run high' },
            { value: 'overwhelmed', label: 'Feeling overwhelmed by their emotions' }
          ]
        },
        {
          id: 'unexpressed',
          type: 'longtext',
          question: 'What do you wish you could say to your partner but haven\'t? What holds you back?',
          placeholder: 'This is a safe space to be honest...'
        },
        {
          id: 'heard_felt',
          type: 'longtext',
          question: 'Describe a time you felt truly heard by your partner. What made it different?',
          placeholder: 'What did they do that helped you feel understood?'
        }
      ]
    },
    {
      id: 'conflict',
      title: 'Your Conflict Patterns',
      description: 'How you navigate disagreement and repair',
      questions: [
        {
          id: 'conflict_role',
          type: 'choice',
          question: 'In conflicts, you tend to be the one who:',
          options: [
            { value: 'pursuer', label: 'Pursues, wants to talk it out immediately' },
            { value: 'withdrawer', label: 'Withdraws, needs space to process' },
            { value: 'fixer', label: 'Tries to fix or problem-solve quickly' },
            { value: 'peacemaker', label: 'Smooths things over, avoids confrontation' }
          ]
        },
        {
          id: 'argument_pattern',
          type: 'longtext',
          question: 'Describe your typical argument cycle. What happens, how does it escalate, how does it end?',
          placeholder: 'Walk through a recent disagreement...'
        },
        {
          id: 'below_surface',
          type: 'longtext',
          question: 'What\'s usually happening below the surface of your arguments? What are you really fighting about?',
          placeholder: 'Beyond the dishes or the schedule...'
        },
        {
          id: 'repair_attempts',
          type: 'longtext',
          question: 'How do you attempt to repair after a conflict? What helps you reconnect?',
          placeholder: 'What does coming back together look like for you?'
        }
      ]
    },
    {
      id: 'love_languages',
      title: 'How You Give & Receive Love',
      description: 'Your primary ways of expressing and experiencing love',
      questions: [
        {
          id: 'love_ranking',
          type: 'ranking',
          question: 'Rank these from most to least meaningful to you:',
          options: [
            { value: 'words', label: 'Words of Affirmation - Hearing "I love you" and genuine compliments' },
            { value: 'time', label: 'Quality Time - Undivided attention and shared experiences' },
            { value: 'gifts', label: 'Receiving Gifts - Thoughtful tokens of affection' },
            { value: 'acts', label: 'Acts of Service - Actions that make life easier' },
            { value: 'touch', label: 'Physical Touch - Affection, intimacy, closeness' }
          ]
        },
        {
          id: 'feeling_loved',
          type: 'longtext',
          question: 'Describe a specific moment when you felt deeply loved by your partner. What did they do?',
          placeholder: 'Paint the scene for us...'
        },
        {
          id: 'expressing_love',
          type: 'longtext',
          question: 'How do you most naturally express love? Is it different from how you want to receive it?',
          placeholder: 'How do you show someone you care?'
        },
        {
          id: 'missed_bids',
          type: 'longtext',
          question: 'When do you feel like your expressions of love are missed or not recognized?',
          placeholder: 'What do you do that might go unnoticed?'
        }
      ]
    },
    {
      id: 'integration',
      title: 'Your Relationship Vision',
      description: 'Where you are and where you want to grow',
      questions: [
        {
          id: 'relationship_strengths',
          type: 'longtext',
          question: 'What are the greatest strengths of your relationship? What do you do really well together?',
          placeholder: 'What makes your relationship special?'
        },
        {
          id: 'growth_edges',
          type: 'longtext',
          question: 'Where do you most want to grow, both individually and as a couple?',
          placeholder: 'What would make the biggest difference?'
        },
        {
          id: 'partner_understanding',
          type: 'longtext',
          question: 'What do you wish your partner understood about you that they might not fully grasp yet?',
          placeholder: 'What piece of you feels unseen?'
        },
        {
          id: 'commitment_to_growth',
          type: 'scale',
          question: 'How committed are you to doing the work of deepening this relationship?',
          min: 1,
          max: 10,
          minLabel: 'Uncertain or hesitant',
          maxLabel: 'Fully committed, whatever it takes'
        }
      ]
    }
  ];

  const totalQuestions = assessmentModules.reduce((sum, module) => sum + module.questions.length, 0);
  const answeredQuestions = Object.keys(responses).length;
  const progress = (answeredQuestions / totalQuestions) * 100;

  const handleResponse = (moduleId, questionId, value) => {
    setResponses(prev => ({
      ...prev,
      [`${moduleId}_${questionId}`]: value
    }));
  };

  const generateProfile = async () => {
    setIsGenerating(true);
    
    const timeTaken = Math.round((Date.now() - startTime) / 1000 / 60);
    
    try {
      const response = await fetch('/api/generate-profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          responses,
          userName
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate profile');
      }

      const data = await response.json();
      
      setProfile({
        text: data.profile,
        timeTaken,
        generatedAt: new Date().toLocaleDateString()
      });
    } catch (error) {
      console.error('Error generating profile:', error);
      alert('There was an error generating your profile. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const currentModule = assessmentModules[currentStep - 1];
  const canProceed = currentModule ? 
    currentModule.questions.every(q => responses[`${currentModule.id}_${q.id}`]) : 
    false;

  const QuestionRenderer = ({ module, question }) => {
    const key = `${module.id}_${question.id}`;
    const value = responses[key];

    switch (question.type) {
      case 'longtext':
        return (
          <textarea
            value={value || ''}
            onChange={(e) => handleResponse(module.id, question.id, e.target.value)}
            placeholder={question.placeholder}
            className="question-textarea"
            rows={6}
          />
        );
      
      case 'scale':
        return (
          <div className="scale-container">
            <div className="scale-labels">
              <span>{question.minLabel}</span>
              <span>{question.maxLabel}</span>
            </div>
            <input
              type="range"
              min={question.min}
              max={question.max}
              value={value || question.min}
              onChange={(e) => handleResponse(module.id, question.id, parseInt(e.target.value))}
              className="scale-slider"
            />
            <div className="scale-value">{value || question.min}</div>
          </div>
        );
      
      case 'choice':
        return (
          <div className="choice-container">
            {question.options.map(option => (
              <label key={option.value} className="choice-option">
                <input
                  type="radio"
                  name={key}
                  value={option.value}
                  checked={value === option.value}
                  onChange={(e) => handleResponse(module.id, question.id, e.target.value)}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );
      
      case 'multiselect':
        const selected = value || [];
        return (
          <div className="multiselect-container">
            {question.options.map(option => (
              <label key={option.value} className="multiselect-option">
                <input
                  type="checkbox"
                  checked={selected.includes(option.value)}
                  onChange={(e) => {
                    const newSelected = e.target.checked
                      ? [...selected, option.value]
                      : selected.filter(v => v !== option.value);
                    handleResponse(module.id, question.id, newSelected);
                  }}
                />
                <span>{option.label}</span>
              </label>
            ))}
          </div>
        );
      
      case 'ranking':
        const ranking = value || [];
        return (
          <div className="ranking-container">
            <div className="ranking-instructions">
              Click to select in order from most meaningful (first) to least meaningful (last)
            </div>
            {question.options.map((option, index) => {
              const currentRank = ranking.indexOf(option.value);
              const isRanked = currentRank !== -1;
              
              return (
                <div
                  key={option.value}
                  className={`ranking-option ${isRanked ? 'ranked' : ''}`}
                  onClick={() => {
                    const newRanking = isRanked
                      ? ranking.filter(v => v !== option.value)
                      : [...ranking, option.value];
                    handleResponse(module.id, question.id, newRanking);
                  }}
                >
                  {isRanked && <span className="rank-number">{currentRank + 1}</span>}
                  <span>{option.label}</span>
                </div>
              );
            })}
          </div>
        );
      
      default:
        return null;
    }
  };

  if (profile) {
    return (
      <>
        <Head>
          <title>Your Relationship Profile | Couples Therapy Tool</title>
          <meta name="description" content="Your personalized relationship insights" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        
        <div className="container profile-view">
          <div className="profile-header">
            <h1>Your Relationship Profile</h1>
            <div className="profile-meta">
              <span>✨ Generated for {userName}</span>
              <span>📅 {profile.generatedAt}</span>
              <span>⏱️ Completed in {profile.timeTaken} minutes</span>
            </div>
          </div>
          
          <div className="profile-content">
            {profile.text}
          </div>
          
          <button
            className="download-btn"
            onClick={() => {
              const blob = new Blob([profile.text], { type: 'text/plain' });
              const url = URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = url;
              a.download = `${userName}-relationship-profile.txt`;
              a.click();
            }}
          >
            <Download size={20} />
            Download Profile
          </button>
        </div>
      </>
    );
  }

  if (isGenerating) {
    return (
      <>
        <Head>
          <title>Generating Your Profile | Couples Therapy Tool</title>
        </Head>
        
        <div className="container">
          <div className="generating-screen">
            <Loader className="generating-icon" size={80} color="#8b7560" />
            <h2>Crafting Your Profile</h2>
            <p>
              We're weaving together your responses into a deeply personal portrait.
              This takes a few moments as we analyze patterns, make connections,
              and find the words for what you've always felt but couldn't quite express...
            </p>
          </div>
        </div>
      </>
    );
  }

  if (currentStep === 0) {
    return (
      <>
        <Head>
          <title>Couples Therapy Tool | Understand Yourself & Your Relationship</title>
          <meta name="description" content="In 25 minutes, gain insights that typically take months of therapy to uncover" />
        </Head>
        
        <div className="container">
          <div className="welcome-screen">
            <div className="welcome-icon">
              <Heart size={50} color="white" />
            </div>
            
            <h1>Understand Yourself.<br/>Transform Your Relationship.</h1>
            
            <p>
              In just 25 minutes, you'll gain insights that typically take months of therapy to uncover.
              Through carefully designed questions rooted in Enneagram, attachment theory, and relationship science,
              we'll help you understand the patterns that shape how you love.
            </p>
            
            <div className="name-input-container">
              <input
                type="text"
                className="name-input"
                placeholder="What's your first name?"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            
            <button
              className="start-btn"
              onClick={() => setCurrentStep(1)}
              disabled={!userName.trim()}
            >
              Begin Your Journey
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </>
    );
  }

  if (currentStep <= assessmentModules.length) {
    return (
      <>
        <Head>
          <title>{currentModule.title} | Couples Therapy Tool</title>
        </Head>
        
        <div className="container">
          <div className="module-view">
            <div className="progress-bar-container">
              <div className="progress-bar" style={{ width: `${progress}%` }} />
            </div>
            
            <div className="module-header">
              <h2>{currentModule.title}</h2>
              <p>{currentModule.description}</p>
            </div>
            
            <div className="questions-container">
              {currentModule.questions.map((question, index) => (
                <div key={question.id} className="question-block" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3>{question.question}</h3>
                  <QuestionRenderer module={currentModule} question={question} />
                </div>
              ))}
            </div>
            
            <div className="navigation-buttons">
              <button
                className="nav-btn"
                onClick={() => setCurrentStep(currentStep - 1)}
              >
                <ArrowLeft size={18} />
                Back
              </button>
              
              {currentStep < assessmentModules.length ? (
                <button
                  className="nav-btn primary"
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={!canProceed}
                >
                  Continue
                  <ArrowRight size={18} />
                </button>
              ) : (
                <button
                  className="nav-btn primary"
                  onClick={generateProfile}
                  disabled={!canProceed}
                >
                  <Sparkles size={18} />
                  Generate My Profile
                </button>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
