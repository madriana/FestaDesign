import 'react-confirm-alert/src/react-confirm-alert.css';

import { Instance } from '@tripetto/vfsm';
import axios from 'axios';
import React, { useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import ReactLoading from 'react-loading';
import { Export } from 'tripetto-collector';
import { Collector } from 'tripetto-collector-rolling';

import { SURVEY_DEFINITION } from './definition';

const useSaveSurvey = () => {
  const [isSaving, setSaving] = useState(false);

  const doSaving = (surveyData: object) => {
    setSaving(true)
    axios.post(`https://y6gblu4v3i.execute-api.sa-east-1.amazonaws.com/dev/post`, surveyData)
      .then(() => {
        setSaving(false);
        confirmAlert({
          title: 'Dados salvos com sucesso!',
          message: 'Obrigado pela sua participação',
          buttons: [
            {
              label: 'Fechar',
              onClick: () => null
            }
          ]
        });
      },() => {
        alert('Houve um erro ao salvar os dados');
      })
  }

  return { isSaving, doSaving };
}

export const SurveyCollector = () => {
  const { isSaving, doSaving } = useSaveSurvey();
  if (isSaving) {
    return (
      <div className="center">
        <ReactLoading type="spin" color="#357edd"  />
      </div>
    )
  } else {
    return (
      <Collector
        definition={SURVEY_DEFINITION}
        onFinish={(instance: Instance) => {
          const fieldsFilled = Export.fieldsFilled(instance);
          doSaving(fieldsFilled.fields);
        }}
      />
    );
  }
}