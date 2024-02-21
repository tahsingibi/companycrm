import fetcher from '../utils/fetcher';

async function getYearlyIncome() {
  const request = await fetcher({ path: 'YearlyIncomes' });
  if (request?.success) {
    const data = request.data.map((item) => item.fields);

    return data;
  }

  return request;
}

const YearlyIncomeServices = {
  getYearlyIncome,
};

export default YearlyIncomeServices;
