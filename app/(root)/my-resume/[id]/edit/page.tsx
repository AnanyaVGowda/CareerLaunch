"use client";

import React, { useEffect, useState } from "react";
import PageWrapper from "@/components/common/PageWrapper";
import Header from "@/components/layout/Header";
import { useAuth } from "@/context/AuthContext";
import { checkResumeOwnership } from "@/lib/actions/resume.actions";
import { useRouter } from "next-nprogress-bar";
import ResumeEditor from "@/components/layout/my-resume/ResumeEditor";
import ProtectedRoute from "@/components/common/ProtectedRoute";

const EditResume = ({ params }: { params: { id: string } }) => {
  const { user, loading } = useAuth();
  const router = useRouter();
  const [isOwner, setIsOwner] = useState(false);
  const [checkingOwnership, setCheckingOwnership] = useState(true);

  useEffect(() => {
    const checkOwnership = async () => {
      if (user) {
        const owner = await checkResumeOwnership(user.uid, params.id);
        setIsOwner(owner);
        if (!owner) {
          router.push("/dashboard");
        }
      }
      setCheckingOwnership(false);
    };

    if (!loading) {
      checkOwnership();
    }
  }, [user, loading, params.id, router]);

  if (loading || checkingOwnership) {
    return <div className="h-screen w-full flex items-center justify-center">Loading...</div>;
  }

  if (!isOwner) {
    return null; // Will redirect in useEffect
  }

  return (
    <ProtectedRoute>
      <PageWrapper>
        <Header />
        <div className="my-10 mx-10 md:mx-20 lg:mx-36">
          <h2 className="text-center text-2xl font-bold">Edit Your Resume</h2>
          <p className="text-center text-gray-600">
            Please provide the necessary information for your resume.
          </p>
        </div>
        <ResumeEditor params={params} userId={user?.uid} />
      </PageWrapper>
    </ProtectedRoute>
  );
};

export default EditResume;
