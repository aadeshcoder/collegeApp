import { SearchFilterPipe } from './search-filter.pipe';

describe('SearchFilterPipe', () => {

  const pipe = new SearchFilterPipe();

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should filter the student list', () => {
    const value = [
      {
        "id": 1,
        "name": "Rajesh Bhojane",
        "sId": "101",
        "department": "information technology",
        "head_of_department": "D.A.Patil",
        "leaves": 13,
        "date_of_join": "2021-01-01",
        "date_of_birth": "1999-01-01",
        "grades": "A",
        "semister": "6",
        "leavesTaken": [{
          "start date": "2021-05-08",
          "end date": "2021-05-08",
          "reason": "some personal work",
          "type of leave": "privilege leave"
        }]
      },
      {
        "id": 2,
        "name": "abc",
        "sId": "101",
        "department": "Computer Science",
        "head_of_department": "D.A.Patil",
        "leaves": 13,
        "date_of_join": "2021-01-01",
        "date_of_birth": "1999-01-01",
        "grades": "A",
        "semister": "6",
        "leavesTaken": [{
          "start date": "2021-05-08",
          "end date": "2021-05-08",
          "reason": "some personal work",
          "type of leave": "privilege leave"
        }]
      },
    ];
    expect(pipe.transform(value, "abc")).toEqual([
      {
        "id": 2,
        "name": "abc",
        "sId": "101",
        "department": "Computer Science",
        "head_of_department": "D.A.Patil",
        "leaves": 13,
        "date_of_join": "2021-01-01",
        "date_of_birth": "1999-01-01",
        "grades": "A",
        "semister": "6",
        "leavesTaken": [{
          "start date": "2021-05-08",
          "end date": "2021-05-08",
          "reason": "some personal work",
          "type of leave": "privilege leave"
        }]
      }])
  })

  it('should return if value is falsy', () => {
    expect(pipe.transform([], 'abc')).toEqual([]);
  })
});
