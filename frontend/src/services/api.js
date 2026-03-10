export const applicationService = {
  async sendApplication(payload) {
    console.log("Отправка заявки:", payload);
    return { success: true };
  },
};
