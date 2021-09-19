export async function createMember(form) {
  return await this.post("/api/member/create", form);
}

export async function getAllMember() {
  return await this.get("/api/member/allMemberList");
}

export async function getReqularMember() {
  return await this.get("/api/member/list");
}

export async function detailsMember(id) {
  return await this.get(`/api/member/${id}`);
}

export async function deleteMember(formData) {
  console.log(formData);
  return await this.delete("/api/member/delete", { data: formData });
}

export async function updateMember(formData) {
  return await this.put("/api/member/update", formData);
}
