"use client"
import React, { useState } from 'react'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import axios from 'axios';
import { Loader2Icon, WandSparklesIcon } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { useAuthContext } from '@/app/Provider';

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
  "love and emotions",
  "Robotics Revolution",
  "Ocean Conservation",
  "Mental Health",
  "Autonomous Vehicles",
  "Food Sustainability",
  "Digital Transformation",
  "Horror Stories",
  "Biometric Authentication",
  "Relationships",
  "Scatty Ytee"
];

const Topic = ({ onHandleInputChange }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedScriptIndex, setSelectedScriptIndex] = useState();
  const { user } = useAuthContext();

  const HandleGenerateScripts = async () => {
    if (user?.credits <= 0) {
      toast('Please add more credits to continue')
      return;
    }

    setLoading(true);
    setSelectedScriptIndex(null);

    try {
      const result = await axios.post("/api/generate-script", {
        topic: selectedTopic,
      });
      console.log("Scripts generated:", result?.data);
      setScripts(result.data?.scripts);
    } catch (error) {
      console.error("Error generating scripts:", error.response?.data || error.message);
      alert("Failed to generate scripts. Please try again later.");
    }
    setLoading(false);
  };

  const handleScriptSelection = (index) => {
    setSelectedScriptIndex(index);
    onHandleInputChange("script", scripts[index].content);
  };

  return (
    <div>
      <div>
        <h2 className="mb-2">Video Title</h2>
        <Input
          placeholder="Enter Video Title"
          onChange={(e) => onHandleInputChange("title", e.target.value)}
        />
        <div className="mt-2">
          <h2 className="mb-2">Video Topic</h2>
        </div>
        <Tabs defaultValue="suggestions" className="w-full mt-2">
          <TabsList>
            <TabsTrigger value="suggestions">Suggestions</TabsTrigger>
            <TabsTrigger value="your_topic">Your Topic</TabsTrigger>
          </TabsList>
          <TabsContent value="suggestions">
            <ScrollArea className="h-[200px] w-full rounded-md border p-3 m-2">
              <div>
                {Suggestions.map((suggestion, index) => (
                  <Button
                    variant="outline"
                    className={`border p-1 m-1 rounded ${suggestion === selectedTopic ? "bg-slate-300 text-black" : "bg-transparent text-slate-50"
                      }`}
                    key={index}
                    onClick={() => {
                      setSelectedTopic(suggestion);
                      onHandleInputChange("topic", suggestion);
                    }}
                  >
                    {suggestion}
                  </Button>
                ))}
              </div>
            </ScrollArea>
          </TabsContent>
          <TabsContent value="your_topic">
            <p className="text-gray-500">Enter Your Topic here </p>
            <Textarea
              placeholder="Enter your topic"
              onChange={(event) => {
                const topic = event.target.value;
                setSelectedTopic(topic); // Update selectedTopic state
                onHandleInputChange("topic", topic); // Update parent component state
              }}
            />
          </TabsContent>
        </Tabs>
        {scripts?.length > 0 && (
          <div className="m-2">
            <h2>Select a Script</h2>
            <div className='grid grid-cols-2 gap-3 p-2 cursor-pointer'>
              {scripts?.map((item, index) => (
                <div
                  key={index}
                  className={`border rounded p-1
                  ${selectedScriptIndex === index ? "bg-slate-300 text-black" : ""}
                `}
                  onClick={() => handleScriptSelection(index)}
                >
                  <p className='line-clamp-5 font-[300px] text-[12px]'>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      {scripts.length === 0 &&
        <Button className="text-lg my-2 font-medium p-5 bg-blue-800"
          onClick={HandleGenerateScripts}
          disabled={loading || !selectedTopic}
        >
          {loading ? <Loader2Icon className='animate-spin' /> :
            <WandSparklesIcon />}
          Generate Scripts
        </Button>
      }
    </div>
  );
};

export default Topic;