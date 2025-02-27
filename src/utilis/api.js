const API_BASE_URL = "http://127.0.0.1:5000/api"; // Change if deployed

export const getMembers = async () => {
  try {
    const response = await fetch(`api/members`);
    if (!response.ok) {
      throw new Error("Failed to fetch members");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching members:", error);
    return [];
  }
};

export const addMember = async (memberData) => {
  try {
    const response = await fetch(`api/members`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(memberData),
    });

    if (!response.ok) {
      throw new Error("Failed to add member");
    }

    return await response.json();
  } catch (error) {
    console.error("Error adding member:", error);
    return null;
  }
};
