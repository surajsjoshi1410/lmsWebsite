// ManageContentTable.jsx
import React, { useState, useEffect } from 'react';
import { Table, Modal, message, Popconfirm } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
  Container,
  Title,
  StyledButton,
} from './ManageContentTable.style';
import ClassForm from '../ClassForm/ClassForm';
import SubjectForm from '../SubjectForm/SubjectForm';
import BoardForm from '../BoardForm/BoardForm';
import PackageForm from '../PackageForm/PackageForm';
import FaqForm from '../FaqForm/FaqForm';
import BannerForm from '../BannerForm/BannerForm';
import ChooseUsForm from '../ChooseUsForm/ChooseUsForm';
import BenefitForm from '../BenifitsForm/BenifitsForm';
import { getAllClasses, createClass, deleteClass } from '../../../../../api/classApi';
import { getAllSubjects, createSubject, deleteSubjectById } from '../../../../../api/subjectApi';
import { getBoards, createBoard, deleteBoard } from '../../../../../api/boadApi';
import { getAllPackages, createPackage, deletePackageById } from '../../../../../api/packagesApi';
import { getAllFAQ, createFAQ, deleteFAQ } from '../../../../../api/faq';
import { getBanners, createBanner, deleteBanner } from '../../../../../api/bannerApi';
import { createChooseUsFeature, deleteChooseUsFeature, getChooseUsData } from '../../../../../api/chooseUsApi';
import { createBenefit, getAllBenefits, deleteBenefit } from '../../../../../api/benefitsApi';
const ManageContentTable = ({ contentType }) => {
  const [data, setData] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [imageModalVisible, setImageModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // Helper function to extract ID from various formats
  const getId = (doc) => doc._id?.$oid || doc._id || doc.id;

  // Fetch data from API when contentType changes
  useEffect(() => {
    fetchData();
  }, [contentType]);

  const fetchData = async () => {
    try {
      switch (contentType) {
        case 'class':
          // Fetch classes and boards
          const [classesData, boardsData] = await Promise.all([
            getAllClasses(),
            getBoards(),
          ]);

          // Create boardMap to map board IDs to board names
          const boardMap = {};
          boardsData.forEach((board) => {
            const boardId = getId(board);
            boardMap[boardId] = board.name;
          });

          // Enrich classes with board names
          const enrichedClasses = classesData.map((cls) => {
            const boardId = cls.curriculum?.$oid || cls?.curriculum?._id;
            const boardName = boardId ? boardMap[boardId] || 'N/A' : 'N/A';
            return {
              ...cls,
              boardName,
            };
          });

          setData(enrichedClasses);
          break;

        case 'subject':
          // Fetch subjects, classes, and boards concurrently
          const [subjectsData, classesDataForSubjects, boardsDataForSubjects] = await Promise.all([
            getAllSubjects(),
            getAllClasses(),
            getBoards(),
          ]);


          // Create mappings
          const classMap = {};
          classesDataForSubjects.forEach((cls) => {
            const classId = getId(cls);
            classMap[classId] = cls;
          });


          const boardMapForSubjects = {};
          boardsDataForSubjects.forEach((board) => {
            const boardId = getId(board);
            boardMapForSubjects[boardId] = board.name;
          });

          // Enrich subjects with class levels and board names
          const enrichedSubjects = subjectsData.map((subject) => {
            const classId = subject.class_id?.$oid || subject.class_id;
            const classData = classMap[classId];
            const classLevel = classData ? classData.classLevel : 'N/A';

            // Get boardId from classData
            const boardId = classData?.curriculum?.$oid || classData?.curriculum?._id;
            const boardName = boardId ? boardMapForSubjects[boardId] || 'N/A' : 'N/A';


            return {
              ...subject,
              classLevel,
              boardName,
            };
          });

          setData(enrichedSubjects);
          break;

        case 'board':
          const boardData = await getBoards();
          setData(boardData);
          break;

        case 'package':
          const packageData = await getAllPackages();
          setData(packageData);
          break;

        case 'faq':
          const faqData = await getAllFAQ();
          setData(faqData);
          break;

        case 'banner':
          const bannerData = await getBanners();
          setData(bannerData);
          break;

        case 'chooseUs':
          const chooseUsData = await getChooseUsData();
          setData(chooseUsData.features);
          break;

        case 'benefits':
          console.log('Fetching benefits');
          const benefitData = await getAllBenefits();
          setData(benefitData.benefits);
          break;

        default:
          setData([]);
          break;
      }
    } catch (error) {
      message.error('Failed to fetch data');
    }
  };

  // Show Create Modal
  const showModal = () => {
    setIsModalVisible(true);
  };

  // Close Create Modal
  const handleCancel = () => {
    setIsModalVisible(false);
  };

  // Handle Create
  const handleCreate = async (newItem) => {
    try {
      switch (contentType) {
        case 'class':
          await createClass(newItem);
          message.success('Class created successfully');
          break;
        case 'subject':
          await createSubject(newItem);
          message.success('Subject created successfully');
          break;
        case 'board':
          await createBoard(newItem);
          message.success('Board created successfully');
          break;
        case 'package':
          await createPackage(newItem);
          message.success('Package created successfully');
          break;
        case 'faq':
          await createFAQ(newItem);
          message.success('FAQ created successfully');
          break;
        case 'banner':
          await createBanner(newItem);
          message.success('Banner created successfully');
          break;
        case 'chooseUs':
          await createChooseUsFeature(newItem);
          message.success('Choose Us Feature created successfully');
          break;

        case 'benefits':
          await createBenefit(newItem);
          message.success('Benefit created successfully');
          break;

        default:
          break;
      }
      setIsModalVisible(false);
      fetchData(); // Refresh data after creation
    } catch (error) {
      message.error('Failed to create item');
    }
  };

  // Handle Delete
  const handleDelete = async (record) => {
    try {
      switch (contentType) {
        case 'class':
          await deleteClass(getId(record));
          message.success('Class deleted successfully');
          break;
        case 'subject':
          await deleteSubjectById(getId(record));
          message.success('Subject deleted successfully');
          break;
        case 'board':
          await deleteBoard(getId(record));
          message.success('Board deleted successfully');
          break;
        case 'package':
          await deletePackageById(getId(record));
          message.success('Package deleted successfully');
          break;
        case 'faq':
          await deleteFAQ(getId(record));
          message.success('FAQ deleted successfully');
          break;
        case 'banner':
          await deleteBanner(getId(record));
          message.success('Banner deleted successfully');
          break;
        case 'chooseUs':
          await deleteChooseUsFeature(getId(record));
          message.success('Choose Us Feature deleted successfully');
          break;

        case 'benefits':
          await deleteBenefit(getId(record));
          message.success('Benefit deleted successfully');
          break;

        default:
          break;
      }
      fetchData(); // Refresh data after deletion
    } catch (error) {
      message.error('Failed to delete item');
    }
  };

  // Define columns, form component, and title based on contentType
  let columns = [];
  let FormComponent = null;
  let title = '';

  switch (contentType) {
    case 'class':
      title = 'Classes';
      columns = [
        {
          title: 'Class Name',
          dataIndex: 'className',
          key: 'className',
        },
        {
          title: 'Class Level',
          dataIndex: 'classLevel',
          key: 'classLevel',
        },
        {
          title: 'Board Name',
          dataIndex: 'boardName',
          key: 'boardName',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this class?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];
      FormComponent = ClassForm;
      break;

    case 'subject':
      title = 'Subjects';
      columns = [
        {
          title: 'Subject Name',
          dataIndex: 'subject_name',
          key: 'subject_name',
        },
        {
          title: 'Class Level', // Changed from 'Class Name' to 'Class Level'
          dataIndex: 'classLevel', // Updated dataIndex to 'classLevel'
          key: 'classLevel',
        },
        {
          title: 'Board Name',
          dataIndex: 'boardName',
          key: 'boardName',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this subject?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];
      FormComponent = SubjectForm;
      break;

    case 'board':
      title = 'Boards';
      columns = [
        {
          title: 'Board Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this board?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];
      FormComponent = BoardForm;
      break;

    case 'package':
      title = 'Packages';
      columns = [
        {
          title: 'Package Name',
          dataIndex: 'package_name',
          key: 'package_name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Price',
          dataIndex: 'price',
          key: 'price',
        },
        {
          title: 'Features',
          dataIndex: 'features',
          key: 'features',
          render: (text, record) => (
            <ul>
              {(record.features || []).map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          ),
        },
        {
          title: 'Image',
          dataIndex: 'image',
          key: 'image',
          render: (text, record) => (
            <img
              src={record.image}
              alt="Item"
              style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => {
                setSelectedImage(record.image);
                setImageModalVisible(true);
              }}
            />
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this package?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];
      FormComponent = PackageForm;
      break;

    case 'faq':
      title = 'FAQ';
      columns = [
        {
          title: 'Question',
          dataIndex: 'question',
          key: 'question',
        },
        {
          title: 'Answer',
          dataIndex: 'answer',
          key: 'answer',
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this FAQ?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];
      FormComponent = FaqForm;
      break;

    case 'banner':
      title = 'Banners';
      columns = [
        {
          title: 'Name',
          dataIndex: 'banner_name',
          key: 'banner_name',
        },
        {
          title: 'Image',
          dataIndex: 'banner_image',
          key: 'banner_image',
          render: (text, record) => (
            <img
              src={record.banner_image}
              alt="Item"
              style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
              onClick={() => {
                setSelectedImage(record.banner_image);
                setImageModalVisible(true);
              }}
            />
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => {
            return (
              <Popconfirm
                title="Are you sure you want to delete this banner?"
                onConfirm={() => handleDelete(record)}
                okText="Yes"
                cancelText="No"
              >
                <button type="button">Delete</button>
              </Popconfirm>
            )
          },
        },
      ];
      FormComponent = BannerForm;
      break;

    case 'chooseUs':
      title = 'Choose Us';
      columns = [

        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: 'Image',
          dataIndex: 'imageUrl',
          key: 'imageUrl',
          render: (text, record) => {
            return (

              <img
                src={record.imageUrl}
                alt="Item"
                style={{ width: '50px', height: '50px', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => {
                  setSelectedImage(record.imageUrl);
                  setImageModalVisible(true);
                }


                }
              />
            )
          },
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this image?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];
      FormComponent = ChooseUsForm;
      break;

    case 'benefits':
      title = 'Benefits';
      columns = [
        {
          title: 'Name',
          dataIndex: 'title',
          key: 'title',
        },
        {
          title: 'Description',
          dataIndex: 'description',
          key: 'description',
        },
        {
          title: "Colour",
          dataIndex: "color",
          key: "color",
          render: (text, record) => (
            <div style={{ backgroundColor: record.color, width: '50px', height: '50px' }}></div>
          ),
        },
        {
          title: 'Action',
          key: 'action',
          render: (_, record) => (
            <Popconfirm
              title="Are you sure you want to delete this benefit?"
              onConfirm={() => handleDelete(record)}
              okText="Yes"
              cancelText="No"
            >
              <button type="button">Delete</button>
            </Popconfirm>
          ),
        },
      ];

      FormComponent = BenefitForm;
      break;


    default:
      break;
  }

  return (
    <Container>
      <Title>{title}</Title>
      <div style={{ textAlign: 'right', marginBottom: '16px' }}>
        <StyledButton icon={<PlusOutlined />} onClick={showModal}>
          Create {title}
        </StyledButton>
      </div>
      {/* Table */}
      <Table
        className='anttable'
        columns={columns}
        dataSource={data}
        rowKey={(record) => { getId(record) }}
      />
      {/* Create Modal */}
      <Modal
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        {FormComponent && (
          <FormComponent onSubmit={handleCreate} onClose={handleCancel} />
        )}
      </Modal>

      {/* Image Modal */}
      <Modal
        visible={imageModalVisible}
        footer={null}
        onCancel={() => setImageModalVisible(false)}
      >
        <img src={selectedImage} alt="Full View" style={{ width: '100%' }} />
      </Modal>
    </Container>
  );
};

export default ManageContentTable;
