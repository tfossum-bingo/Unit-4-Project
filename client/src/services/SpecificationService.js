import ApiClient from './ApiClient';

export const __AcknowledgeSpecification = async (data) => {
  console.log('SVC AckSpec: ', data)
    try {
        const res = await ApiClient.post('/specification_users/', data);
        console.log('AckSpec: ', res.data);
        return res.data;
      } catch (error) {
        throw error;
      }
};


