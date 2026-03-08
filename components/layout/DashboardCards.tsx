"use client";

import AddResume from "@/components/common/AddResume";
import ResumeCard from "@/components/common/ResumeCard";
import { fetchUserResumes } from "@/lib/actions/resume.actions";
import { useAuth } from "@/context/AuthContext";
import React, { useEffect, useState } from "react";

const DashboardCards = () => {
  const { user, loading } = useAuth();
  const userId = user?.uid;
  const [resumeList, setResumeList] = useState(null as any);

  const loadResumeData = async () => {
    try {
      const resumeData = await fetchUserResumes(userId || "");

      setResumeList(JSON.parse(resumeData as any));
    } catch (error) {
      console.error("Error fetching resume:", error);
    }
  };

  useEffect(() => {
    if (!loading && user) {
        loadResumeData();
    }
  }, [user, loading]);

  if (loading) {
      return <div>Loading dashboard...</div>; // Could be a skeleton loader here
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 mt-10 gap-8">
        <AddResume userId={userId} />

        {resumeList !== null
          ? resumeList.map((resume: any) => (
              <ResumeCard
                key={resume.resumeId}
                resume={JSON.stringify(resume)}
                refreshResumes={loadResumeData}
              />
            ))
          : [1, 2, 3].map((index) => (
              <ResumeCard
                key={index}
                resume={null}
                refreshResumes={loadResumeData}
              />
            ))}
      </div>
    </>
  );
};

export default DashboardCards;
