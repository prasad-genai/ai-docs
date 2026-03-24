# Chapter 2: Types of Machine Learning

---

## 2.1 Why Different Types Exist

Machine Learning is about learning patterns from data. However, not all problems provide data in the same way.

Sometimes:

* We have correct answers
* Sometimes we don’t
* Sometimes learning happens through interaction

> The type of Machine Learning depends on the **data and feedback available**.

There are three main types:

* Supervised Learning
* Unsupervised Learning
* Reinforcement Learning

---

## 2.2 Supervised Learning (Learning with Answers)

### Key Idea

* Data has **inputs + correct outputs (labels)**
* Model learns by comparing prediction with correct answer

> The model is guided during learning.

Supervised learning is the most common type of Machine Learning. Here, the model is trained using examples where both the input and the correct output are known. By repeatedly comparing its predictions with the correct answers, the model gradually improves and learns patterns that can be applied to new data.

---

### Types of Supervised Learning

---

### 1. Regression

* Output is a number
* Examples:

  * Predicting house prices
  * Predicting temperature

Regression means predicting a continuous value.
For example:

* House price = ₹45,20,000
* Temperature = 32.5°C

The output is not fixed categories—it can be any number.

Regression is used when the answer is a continuous value, such as predicting a house price or temperature. In real-world scenarios, many problems involve estimating quantities rather than choosing between categories. For instance, predicting stock prices, sales revenue, or rainfall amounts all fall under regression. The key idea is that the output can take any value within a range, and the model learns how input features influence that value.

---

### 2. Classification

* Output is a category
* Examples:

  * Spam / Not Spam
  * Fraud / Not Fraud

Classification means assigning data to a specific category.
For example:

* Email → Spam
* Transaction → Fraud

The output is from a fixed set of categories.

Classification is used when the answer belongs to a predefined set of categories. Unlike regression, where the output is numeric, classification deals with discrete labels. For example, detecting whether an email is spam or not, identifying whether a patient has a disease, or recognizing objects in an image. The model learns boundaries between categories and uses them to classify new data points correctly.

---

### When to Use Supervised Learning

* You have labeled data
* You want to predict outcomes

Supervised learning is widely used because labeled data provides clear guidance, making it easier for models to learn accurate patterns.

---

## 2.3 Unsupervised Learning (Learning Without Answers)

### Key Idea

* Data has **no labels**
* Model finds **patterns on its own**

> No guidance is given to the model.

Unsupervised learning is used when we only have input data without any correct answers. The model explores the data and tries to identify patterns, similarities, or structures. It is often used for understanding data rather than predicting specific outputs.

---

### Main Tasks

---

### 1. Clustering

* Group similar data points
* Example:

  * Grouping customers

Clustering means grouping similar items together.

Clustering is used to identify natural groupings within data. For example, a company can group customers based on purchasing behavior, allowing it to target different segments more effectively. The model does not know the groups beforehand—it discovers them based on similarities in the data.

---

### 2. Dimensionality Reduction

* Reduce number of features
* Simplify data

Dimensionality means the number of features in data.
Dimensionality reduction means reducing features while keeping important information.

Dimensionality reduction is useful when dealing with complex datasets that have many features. By reducing the number of features, we make the data easier to process and visualize while still preserving the most important information. This helps improve efficiency and sometimes even model performance.

---

### When to Use Unsupervised Learning

* No labeled data
* Need to explore patterns

Unsupervised learning is often the first step in understanding unknown data.

---

## 2.4 Reinforcement Learning (Learning by Experience)

### Key Idea

* Model learns from **actions + rewards**
* No direct correct answers

> Learning happens through feedback.

Reinforcement learning is different from the other two types. Instead of learning from a fixed dataset, the model learns by interacting with an environment. It takes actions and receives feedback in the form of rewards or penalties, gradually improving its decisions over time.

---

### Key Terms

---

### Agent

* The learner or decision-maker

The agent is the system that takes actions and learns from outcomes. It is the main component responsible for making decisions.

---

### Environment

* The world the agent interacts with

The environment provides the situation in which the agent operates. It responds to the agent’s actions and gives feedback.

---

### Action

* A decision taken by the agent

An action is any step the agent takes to interact with the environment.

---

### Reward

* Feedback received

The reward tells the agent whether its action was good or bad. The goal is to maximize rewards over time.

---

### Example

* Game playing
* Robotics

In a game, the model learns which moves lead to winning. Over time, it develops strategies that improve its performance.

---

### When to Use Reinforcement Learning

* Sequential decisions
* Actions affect future outcomes

Reinforcement learning is useful in dynamic environments where decisions are interconnected.

---

## 2.5 Comparing the Three Types

* Supervised → learn from answers
* Unsupervised → find patterns
* Reinforcement → learn from rewards

Each type is suited for different kinds of problems.

---

## 2.6 A Clear Mental Model

* Supervised → Learn with a teacher
* Unsupervised → Learn by observing
* Reinforcement → Learn by trial and error

---

## 2.7 Why This Matters

* Helps choose the right approach
* Defines how data is used
* Impacts model performance

Choosing the correct type is essential for building effective systems.

---

## 2.8 What Comes Next

Next, we will explore:

> The Machine Learning Pipeline — how data moves from input to prediction.

---

## Chapter Summary

* ML has three main types
* Supervised uses labeled data
* Unsupervised finds patterns
* Reinforcement learns from rewards
* Choosing the right type is important

---

Take time to understand each type clearly.
This foundation will support everything ahead.

---
