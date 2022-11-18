---
title: Example structure
sidebar_position: 3
---

# Example structure

## Simple example
<details className='dropdown'>
  <summary>Show image</summary>
  <img src='https://i.imgur.com/KXHHGSP.png' alt='Example preset' />
</details>

```lua
['example'] = {
  title = 'EXAMPLE DOCUMENT',
  header = {
    image = 'https://i.imgur.com/QwfYJ7R.png',
    text = 'By signing this document you will waive certain legal rights, including the right to sue. Please read carefully.',
  },
  inputs = {
    {
      name = 'personal',
      title = 'Personal Information',
      fields = {
        {
          name = 'firstName',
          type = 'text',
          label = 'First name',
          placeholder = 'Your first name',
          required = true,
        },
        {
          name = 'lastName',
          type = 'text',
          label = 'Last name',
          placeholder = 'Your last name',
          required = true,
        },
        {
          name = 'dob',
          type = 'date',
          label = 'Date of birth',
          placeholder = 'Your date of birth',
          span = 2,
        },
        {
          name = 'signature',
          type = 'signature',
          label = 'Signature',
          placeholder = 'Sign yourself',
          value = 'Smith',
          required = true,
        },
      }
    }
  }
},
```



## Medical report
<details className='dropdown'>
  <summary>Show image</summary>
  <img src='https://i.imgur.com/eVQHSKn.png' alt='Example preset' />
</details>

```lua
['MedicalReport'] = {
  title = 'MEDICAL REPORT',
  header = {
    image = 'https://i.imgur.com/BKdEY41.png',
    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat ullam ratione animi minima recusandae. Magnam rem commodi porro eveniet.',
  },
  inputs = {
    {
      name = 'patient',
      title = 'Patient Information',
      fields = {
        {
          name = 'firstName',
          type = 'text',
          label = 'First name',
          placeholder = "Patient's first name",
          required = true,
        },
        {
          name = 'lastName',
          type = 'text',
          label = 'Last name',
          placeholder = "Patient's last name",
          required = true,
        },
        {
          name = 'dob',
          type = 'date',
          label = 'Date of birth',
          placeholder = "Patient's date of birth",
          format = 'DD.MM.YYYY',
          required = true,
        },
        {
          name = 'blood',
          type = 'select',
          label = 'Blood type',
          placeholder = "Patient's blood type",
          data = {'O-', 'O+', 'A-', 'A+', 'B-', 'B+', 'AB-', 'AB+'},
          required = true,
        },
        {
          name = 'height',
          type = 'number',
          label = 'Height (cm)',
          placeholder = "Patient's height",
          min = 0,
          max = 500,
        },
        {
          name = 'weigth',
          type = 'number',
          label = 'Weigth (kg)',
          placeholder = "Patient's weigth",
          min = 0,
          max = 1000,
        },
      }
    },
    {
      name = 'diagnosis',
      title = 'Diagnosis',
      fields = {
        {
          name = 'description',
          type = 'textarea',
          label = 'Detailed description',
          placeholder = 'Patient lost their left arm and ...',
          span = 2,
          max = 300,
          minRows = 3,
          required = true,
        },
        {
          name = 'department',
          type = 'select',
          label = 'Department',
          placeholder = 'Select department',
          data = {'Cardiology', 'Neurology', 'Gastroenterology', 'Oncology', 'Orthopedics', 'Urology', 'Dermatology', 'Psychiatry'},
          clearable = true,
        },
        {
          name = 'date',
          type = 'date',
          label = 'Date of diagnosis',
          placeholder = 'Date of diagnosis',
          format = 'DD.MM.YYYY',
          required = true,
        },
      }
    },
    {
      name = 'signature',
      title = 'Signature',
      fields = {
        {
          name = 'doctor',
          type = 'signature',
          label = "Doctor's signature",
          placeholder = 'Signature',
          required = true,
        },
      }
    }
  }
},
```
