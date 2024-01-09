import os
import json
from flask import Blueprint, request, jsonify, make_response
from flask_cors import CORS, cross_origin
from PySense import PySense
from src.main.utils import generate_csdk_data_model

main = Blueprint('main', __name__)
CORS(main, resources={r"/*": {"origins": "*", "allow_headers": "*", "expose_headers": "*"}})

@main.route('/api/v1/data-models-get', methods=['GET'])
def get_data_models():
  response = ''
  sisense_url = os.getenv('REACT_APP_SISENSE_URL')
  sisense_api_token = os.getenv('REACT_APP_SISENSE_API_TOKEN')
  sisense_version = 'Linux'

  """Return a list of data models."""
  # Get all data models from sisene env
  py_client = PySense.authenticate_by_token(sisense_url, sisense_api_token, sisense_version)
  res = py_client.get_data_models()

  # Create array of data model objects for dropdown
  data_models = []
  for data_model in res:
    obj = {}
    obj['value'] = data_model.get_oid()
    obj['label'] = data_model.get_title()
    data_models.append(obj)

  # JSONify response
  response = make_response(jsonify(data_models), 200)
  return response

@main.route('/api/v1/data-models-post', methods=['POST'])
def post_data_models():
  response = 'Data model TypeScript respresentations created.'
  sisense_url = os.getenv('REACT_APP_SISENSE_URL')
  sisense_api_token = os.getenv('REACT_APP_SISENSE_API_TOKEN')

  data_models = request.get_json(force=True)
  for data_model in data_models:
    # Get data models
    generate_csdk_data_model(data_model['label'], sisense_url, sisense_api_token)

  # JSONify response
  response = make_response(jsonify(response), 200)
  return response
