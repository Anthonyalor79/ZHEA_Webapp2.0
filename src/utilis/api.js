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

    return {status: response.status};
  } catch (error) {
    alert("Failed to send request.");
    console.error("Error adding member:", error);
    return null;
  }
};
