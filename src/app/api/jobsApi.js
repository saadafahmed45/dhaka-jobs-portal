export const jobsApi = "https://dhaka-jobs-server.onrender.com/jobs";

async function jobsDataLoad() {
  const res = await fetch(jobsApi, {
    next: {
      revalidate: 5,
    },
  });

  return res.json();
}
export default jobsDataLoad;
