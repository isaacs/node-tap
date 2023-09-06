import { at as stackAt, capture as stackCapture, } from '../../dist/mjs/index.js';
const getError = () => new Error('test error');
export const error = getError();
const getCapture = () => stackCapture();
export const capture = getCapture();
const getAt = () => stackAt();
export const at = getAt();
const getStack = () => {
    const { prepareStackTrace } = Error;
    Error.prepareStackTrace = (_, c) => c;
    const obj = { stack: [] };
    Error.captureStackTrace(obj);
    const { stack } = obj;
    Object.assign(Error, { prepareStackTrace });
    return stack;
};
export const stack = getStack();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FwdHVyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcHR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNMLEVBQUUsSUFBSSxPQUFPLEVBQ2IsT0FBTyxJQUFJLFlBQVksR0FDeEIsTUFBTSx5QkFBeUIsQ0FBQTtBQUVoQyxNQUFNLFFBQVEsR0FBRyxHQUFHLEVBQUUsQ0FDcEIsSUFBSSxLQUFLLENBQUMsWUFBWSxDQUE4QixDQUFBO0FBQ3RELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQTtBQUUvQixNQUFNLFVBQVUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxZQUFZLEVBQUUsQ0FBQTtBQUN2QyxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUcsVUFBVSxFQUFFLENBQUE7QUFFbkMsTUFBTSxLQUFLLEdBQUcsR0FBRyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUE7QUFDN0IsTUFBTSxDQUFDLE1BQU0sRUFBRSxHQUFHLEtBQUssRUFBRSxDQUFBO0FBRXpCLE1BQU0sUUFBUSxHQUFHLEdBQUcsRUFBRTtJQUNwQixNQUFNLEVBQUUsaUJBQWlCLEVBQUUsR0FBRyxLQUFLLENBQUE7SUFDbkMsS0FBSyxDQUFDLGlCQUFpQixHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sR0FBRyxHQUFpQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsQ0FBQTtJQUN2RCxLQUFLLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDNUIsTUFBTSxFQUFFLEtBQUssRUFBRSxHQUFHLEdBQUcsQ0FBQTtJQUNyQixNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxFQUFFLGlCQUFpQixFQUFFLENBQUMsQ0FBQTtJQUMzQyxPQUFPLEtBQUssQ0FBQTtBQUNkLENBQUMsQ0FBQTtBQUNELE1BQU0sQ0FBQyxNQUFNLEtBQUssR0FBRyxRQUFRLEVBQUUsQ0FBQSJ9