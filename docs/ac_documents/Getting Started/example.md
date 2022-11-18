---
title: Example structure
sidebar_position: 3
---

# Example structure

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
          span = 4,
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



## Appointment request
<details className='dropdown'>
  <summary>Show image</summary>
  <img src='https://i.imgur.com/Ce6PXyv.png' alt='Example preset' />
</details>

```lua
['AppointmentRequest'] = {
  title = 'APPOINTMENT REQUEST',
  header = {
    image = 'https://i.imgur.com/xxw0NKt.png',
    text = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi placeat ullam ratione animi minima recusandae. Magnam rem commodi porro eveniet?',
  },
  inputs = {
    {
      name = 'personal',
      title = 'Personal Information',
      fields = {
        {
          name = 'prefix',
          type = 'select',
          label = 'Prefix',
          value = 'Mr.',
          data = {'Mr.', 'Mrs.', 'Ms.'},
          clearable = true,
          span = 1,
        },
        {
          name = 'fullName',
          type = 'text',
          label = 'Full name',
          placeholder = 'Enter your full name',
          required = true,
        },
        {
          name = 'gender',
          type = 'select',
          label = 'Gender',
          placeholder = 'Your gender',
          required = true,
          data = {'Male', 'Female', 'Non-binary', 'Other'},
          span = 1,
        },
        {
          name = 'phone',
          type = 'text',
          label = 'Phone number',
          placeholder = '(000) 000-0000',
          required = true,
        },
        {
          name = 'email',
          type = 'text',
          label = 'Email address',
          placeholder = 'email@example.com',
          required = true,
        },
      },
    },
    {
      name = 'address',
      title = 'Address',
      fields = {
        {
          name = 'street',
          type = 'text',
          label = 'Street address',
          placeholder = '1234 Main Plaza',
          required = true,
          span = 3,
        },
        {
          name = 'postal',
          type = 'text',
          label = 'Postal code',
          placeholder = '00000',
          required = true,
          span = 1,
        },
        {
          name = 'city',
          type = 'text',
          label = 'City',
          placeholder = 'Paleto Bay',
          required = true,
        },
        {
          name = 'state',
          type = 'text',
          label = 'State / Province',
          placeholder = 'San Andreas',
          required = true,
        },
      },
    },
    {
      name = 'details',
      title = 'Appointment Details',
      fields = {
        {
          name = 'date',
          type = 'date',
          label = 'Date',
          placeholder = 'Select a date',
          required = true,
        },
        {
          name = 'person',
          type = 'text',
          label = 'Prefered person to meet',
          placeholder = 'Bob',
        },
        {
          name = 'reason',
          type = 'textarea',
          label = 'Reason for appointment',
          placeholder = 'Why do you want to schedule an appointment?',
          required = true,
          autosize = true,
          minRows = 3,
          maxRows = 3,
          max = 500,
          span = 4,
        },
      },
    },
  }
},
```
