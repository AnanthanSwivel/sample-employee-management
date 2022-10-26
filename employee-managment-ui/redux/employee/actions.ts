import { createAsyncThunk } from '@reduxjs/toolkit';
import { EmployeeInterface } from '../../interfaces/employeeInterface';
import { deleteMethod, get, post, put } from '../../utils/fetch-wrapper';

export const getAllEmployees = createAsyncThunk('employees/get-all', async ({ params }: { params?: string | string[][] | Record<string, string> | URLSearchParams | undefined }, { rejectWithValue }) => {
  try {
    const response = await get(`employees?${params}`);
    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }

  } catch (err) {
    return rejectWithValue(err)
  }

});

// Get One   ==========================================================================================

export const getOneEmployees = createAsyncThunk('employees/get-one', async ({ id }: { id: string | string[]  }, { rejectWithValue }) => {
  try {
    const response = await get(`employees/${id}`);
    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }

  } catch (err) {
    return rejectWithValue(err)
  }

});

//    ==========================================================================================

// Create   ==========================================================================================
export const createEmployees = createAsyncThunk('employees/create', async ({ data }: { data: any}, { rejectWithValue }) => {
  console.log("🚀 ~ file: actions.ts ~ line 41 ~ createEmployees ~ data", data)
  try {
    const response = await post(`employees`, data);

    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }

  } catch (err) {
    return rejectWithValue(err)
  }

});

//    ==========================================================================================

// Delete   ==========================================================================================
export const deleteEmployees = createAsyncThunk('employees/delete', async ({ id }: { id: string | string[]}, { rejectWithValue }) => {
  try {
    const response = await deleteMethod(`employees/${id}`);
    if (response.code == 200) {
      response.data = id;
      return response;
    } else {
      console.log(response);

      return rejectWithValue(response)
    }

  } catch (err) {
    return rejectWithValue(err)
  }

});

// Update Account Products
export const updateEmployees = createAsyncThunk('employees/updated', async ({ id, data}: { id: string | string[], data: EmployeeInterface }, { rejectWithValue }) => {
  try {
    console.log("🚀 ~ file: actions.ts ~ line 82 ~ updateEmployees ~ data", data)
    const response = await put(`employees/${id}`, data);
    if (response.code == 200) {
      return response;
    } else {
      return rejectWithValue(response)
    }

  } catch (err) {
    return rejectWithValue(err)
  }

});
//   ==========================================================================================

// CLEAR   ==========================================================================================
export const clearEmployees = createAsyncThunk('employees/clear', async () => {
  return "clear";
});
