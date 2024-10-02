export const jobsApi = "https://dhaka-job-portal-server.vercel.app/jobs";

async function jobsDataLoad() {
  const res = await fetch(jobsApi, {
    next: {
      revalidate: 5,
    },
  });

  return res.json();
}
export default jobsDataLoad;
