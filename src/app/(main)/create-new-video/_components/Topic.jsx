"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import GenerateScripts from './GenerateScripts';
import axios from 'axios';
import { WandSparklesIcon } from 'lucide-react';

const Suggestions = [
  "Historic Stories",
  "Artificial Intelligence",
  "Climate Change",
  "Space Exploration",
  "Virtual Reality",
  "Renewable Energy",
  "Neural Networks",
  "Mythological Tales",
  "Smart Cities",
  "Augmented Reality",
  "Motivational Stories",
  "Blockchain Technology",
  "Robotics Revolution",
  "Ocean Conservation",
  "Mental Health",
  "Autonomous Vehicles",
  "Food Sustainability",
  "Digital Transformation",
  "Horror Stories",
  "Biometric Authentication"
];

const Topic = ({ onHandleInputChange }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  return (
    <div>
      <div>
        <h2
          className="mb-2">Video Title
        </h2>
        <Input
          placeholder="Enter Video Title"
          onChange={(e) => onHandleInputChange("title", e.target.value)}
        />
        <div className="mt-2">
          <h2 className="mb-2">Video Topic</h2>
          <p className="">Select Topic</p>
        </div>
        <Tabs defaultValue="suggestions" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestions">
            <div>
              {Suggestions.map((suggestion, index) => (
                <Button
                  variant="outline"
                  className={`border p-1 m-1 rounded ${suggestion === selectedTopic ? "bg-slate-300 text-black" : "bg-transparent text-slate-50"
                    }`}
                  key={index}
                  onClick={() => {
                    setSelectedTopic(suggestion)
                    onHandleInputChange("topic", suggestion)
                  }}
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="your_topic">
            <p className="text-gray-500">Enter Your Topic here </p>
            <Textarea
              placeholder="Enter your topic"
              onChange={(e) => onHandleInputChange("topic", e.target.value)}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Topic;
