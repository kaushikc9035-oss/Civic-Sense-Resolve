
import React, { useState } from 'react';
import { CitizenView } from './components/CitizenView';
import { OfficialDashboard } from './components/OfficialDashboard';
import { Header } from './components/Header';
import type { Issue, IssueStatus, View } from './types';

const App: React.FC = () => {
  const [view, setView] = useState<View>('citizen');
  const [issues, setIssues] = useState<Issue[]>([]);

  const handleReportSubmitted = (newIssue: Issue) => {
    setIssues(prevIssues => [newIssue, ...prevIssues]);
    // In a real app, you might show a success message and switch views
    alert('Issue reported successfully! An official will review it soon.');
  };

  const handleUpdateStatus = (issueId: string, newStatus: IssueStatus) => {
    setIssues(prevIssues =>
      prevIssues.map(issue =>
        issue.id === issueId ? { ...issue, status: newStatus } : issue
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header currentView={view} setView={setView} issueCount={issues.length} />
      <main className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {view === 'citizen' ? (
          <CitizenView onReportSubmitted={handleReportSubmitted} />
        ) : (
          <OfficialDashboard issues={issues} onUpdateStatus={handleUpdateStatus} />
        )}
      </main>
      <footer className="text-center p-4 text-gray-500 text-sm">
        <p>&copy; 2025 CivicResolve AI. Making communities better, together.</p>
      </footer>
    </div>
  );
};

export default App;
