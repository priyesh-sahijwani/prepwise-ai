import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Fire from 'lucide-react/dist/esm/icons/flame';

const mockData = {
  progress: 65,
  challengesCompleted: 42,
  interviewsPracticed: 7,
  skillsImproved: ['JavaScript', 'React', 'Data Structures'],
  weeklyActivity: [
    { day: 'Mon', hours: 2 },
    { day: 'Tue', hours: 1.5 },
    { day: 'Wed', hours: 3 },
    { day: 'Thu', hours: 2.5 },
    { day: 'Fri', hours: 1 },
    { day: 'Sat', hours: 4 },
    { day: 'Sun', hours: 2 },
  ],
  questionsSolved: 157,
  streak: 12,
};

const Profile = ({ username }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-8"
    >
      <h1 className="text-3xl font-bold mb-8">Welcome, {username}!</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={mockData.progress} className="w-full" />
            <p className="text-center mt-2">{mockData.progress}%</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Challenges Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">{mockData.challengesCompleted}</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Interviews Practiced</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">{mockData.interviewsPracticed}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Questions Solved</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-center">{mockData.questionsSolved}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Current Streak</CardTitle>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <Fire className="text-orange-500 mr-2" size={32} strokeWidth={2} />
            <p className="text-4xl font-bold">{mockData.streak} days</p>
          </CardContent>
        </Card>
      </div>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Skills Improved</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {mockData.skillsImproved.map((skill, index) => (
              <span key={index} className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                {skill}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
      
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Weekly Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={mockData.weeklyActivity}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="hours" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Profile;